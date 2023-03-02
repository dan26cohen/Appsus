import { noteService } from '../services/note.service.js'
import NoteFilter from '../cmps/NoteFilter.js'
import NoteList from '../cmps/NoteList.js'



export default {
    template: `
    <section class="notes-index" :class="{'edit-mode':isEditMode}">
        <form class="add-note-form" @submit.prevent="addNote">
            <input placeholder="Title..." v-model="title" type="text" class="add-title-input" >
            <input placeholder="Take a note..." type="text" class="add-txt-input" v-model="txt" >
            <button type="submit" class="add-btn" :class="{'edit-mode':isEditMode}">Add Note</button>
        </form>
        <NoteList :notes="notes" @update="updateNote" @duplicate="duplicateNote"
        @blur="blurScreen" @remove="removeNote" @paint="paint"/>
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