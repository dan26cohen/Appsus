import { noteService } from '../services/note.service.js'
import NoteFilter from '../cmps/NoteFilter.js'
import NoteList from '../cmps/NoteList.js'


export default {
    template: `
    <section class="notes-index">
        <button class="add-btn" @click="addNote">Add Note</button>
        <NoteList :notes="notes" @remove="removeNote" @edit="editNote" />
    </section>`,

    data() {
        return {
            notes: [],
        }
    },
    methods: {
        addNote() {
            noteService.addNewNote().then(note => {
                console.log('note added', note)
                this.notes.push(note)
            })

        },
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
        editNote(noteId) {
            noteService.post(noteId)
                .then(() => {
                    const idx = this.notes.findIndex(note => note.id === noteId)
                    this.notes.splice(idx, 1)
                    console.log('note removed')
                })
                .catch(err => {
                    console.log('error')
                })
        },
    },
    // css columns
    // 
    computed: {

    },

    created() {
        noteService.query()
            .then(notes => this.notes = notes)
    },
    components: {
        NoteFilter,
        NoteList,
    },
    emits: [],
}