import { noteService } from '../services/note.service.js'
import NoteFilter from '../cmps/NoteFilter.js'
import NoteList from '../cmps/NoteList.js'


export default {
    template: `
    <section class="notes-index">
        <form class="add-note-form" @submit.prevent="addNote">
            <input placeholder="Title here..." type="text" class="add-title-input" v-model="txt">
            <input placeholder="Text goes here..." type="text" class="add-txt-input"  v-model="title">
            <button type="submit" class="add-btn">Add Note</button>
        </form>
        </div>


        </div>
        <NoteList :notes="notes" @remove="removeNote" @edit="editNote" />
    </section>`,

    data() {
        return {
            txt: '',
            title: '',
            notes: [],
        }
    },
    methods: {
        addNote() {
            noteService.addNewNote(this.txt, this.title).then(note => {
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