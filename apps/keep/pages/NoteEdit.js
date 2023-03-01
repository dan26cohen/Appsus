import { noteService } from '../services/note.service.js'

export default {
    template: `
        <section class="note-edit">
            <form @submit.prevent="save">
                <h2>Edit Note</h2>
                <input type="text" v-model="note.info.title" placeholder="Title...">
                <input type="text" v-model="note.info.txt" placeholder="Price...">
                <button>Save</button>
            </form>
            <RouterLink to="/notes"><span class="back-route">Back</span></RouterLink>
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
        save() {
            noteService.save(this.note)
                .then(savednote => {
                    console.log('note saved', savednote)
                    this.$router.push('/notes')
                })
                .catch(console.log('error in save'))
        },

    }
}