import { noteService } from '../services/note.service.js'

export default {
    props: ['note'],
    template: `
        <section class="note-edit">
            <form @submit.prevent="save">
                <h2>Edit Note</h2>
                <input type="text" v-model="note.info.title" placeholder="Title...">
                <input type="text" v-model="note.info.txt" placeholder="Price...">
                <button>Save</button>
            </form>
        </section>
    `,
    data() {
        return {
            note: noteService.getEmptyNote()
        }
    },
    created() {
        const { noteId } = this.$route.params
        if (noteId) {
            noteService.get(noteId)
                .then(note => this.note = note)
        }
    },
    methods: {

    }
}