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
        <NoteList :notes="notes" @update="editNote"
        @blur="blurScreen" @remove="removeNote" @edit="editNote" @paint="paintNote"/>
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
        paintNote(noteId, color) {
            noteService.paintNote(noteId, color)
                .then(() => {
                    console.log('note painted')
                })
                .catch(err => {
                    console.log('error')
                })
        },
        blurScreen() {
            this.isEditMode = true
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
    },
    emits: [],
}