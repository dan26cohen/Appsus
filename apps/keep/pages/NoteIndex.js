import { noteService } from '../services/note.service.js'
import NoteFilter from '../cmps/NoteFilter.js'
import NoteList from '../cmps/NoteList.js'
import AddNote from '../cmps/AddNote.js'

export default {
    template: `
    <section class="notes-index">
        <AddNote :notes="notes" @setNoteType=setNoteType @addNote=addNote />
        <NoteList :notes="notes" @update="updateNote" @duplicate="duplicateNote"
         @remove="removeNote" @paint="paint"/>
    </section>`,

    data() {
        return {
            noteType: 'NoteTxt',
            notes: [],
        }
    },
    methods: {
        removeNote(noteId) {
            noteService.remove(noteId)
                .then(() => {
                    const idx = this.notes.findIndex(note => note.id === noteId)
                    this.notes.splice(idx, 1)
                    console.log('note removed')
                })
                .catch(err => {
                    console.log('error')
                })
        },
        updateNote(noteId) {
            const idx = this.notes.findIndex(note => note.id === noteId)
            noteService.save(this.notes[idx])
                .then(() => {
                    console.log('note saved')
                })
                .catch(err => {
                    console.log('note not saved')
                })
        },
        duplicateNote(noteId) {
            const idx = this.notes.findIndex(note => note.id === noteId)
            const newNote = JSON.parse(JSON.stringify(this.notes[idx]));
            newNote.id = ''
            console.log('newNote', newNote)
            this.notes.push(newNote)
            noteService.save(newNote)
                .then(() => {
                    console.log('note saved')
                })
                .catch(err => {
                    console.log('note not saved')
                })
        },
        paint() {
            noteService.query()
                .then(notes => this.notes = notes)
                .catch('error paint')
        },
        setNoteType(type) {
            console.log('type', type)
            this.noteType = type
        },
        addNote(newNote) {
            this.notes.push(newNote)
        }
    },

    computed: {

    },

    created() {
        noteService.query()
            .then(notes => this.notes = notes)
    },
    components: {
        NoteFilter,
        NoteList,
        AddNote,
    },
    emits: [],
}