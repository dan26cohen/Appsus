import { noteService } from '../services/note.service.js'
import NoteFilter from '../cmps/NoteFilter.js'
import NoteList from '../cmps/NoteList.js'


export default {
    template: `
    <section class="notes-index" :class="{'edit-mode':isEditMode}">
        <form class="add-note-form" @submit.prevent="addNote">
            <input placeholder="Title..." type="text" class="add-title-input" v-model="title">
            <input placeholder="Take a note..." type="text" class="add-txt-input"  v-model="txt">
            <button type="submit" class="add-btn" :class="{'edit-mode':isEditMode}">Add Note</button>
        </form>
        </div>


        </div>
        <NoteList :notes="notes" @update="updateNote" @duplicate="duplicateNote"
        @blur="blurScreen" @remove="removeNote" @paint="paintNote"/>
    </section>`,

    data() {
        return {
            txt: '',
            title: '',
            isEditMode: false,
            notes: [],
        }
    },
    methods: {
        addNote() {
            noteService.addNewNote(this.txt, this.title).then(note => {
                console.log('note added', note)
                this.notes.push(note)
                console.log('this.notes', this.notes)
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
            const newNote = { ...this.notes[idx] }
            newNote.id = ''
            this.notes.push(newNote)
            noteService.save(newNote)
                .then(() => {
                    console.log('note saved')
                })
                .catch(err => {
                    console.log('note not saved')
                })
        },
        paintNote(noteId, color) {
            noteService.paintNote(noteId, color)
                .then(() => {
                    console.log('note painted')
                    const idx = this.notes.findIndex(note => note.id === noteId)
                    this.note.style.backgroundColor = color
                    noteService.save(this.notes[idx])
                })
                .catch(err => {
                    console.log('error')
                })
        },
        blurScreen() {
            this.isEditMode = true
        },
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
    },
    emits: [],
}