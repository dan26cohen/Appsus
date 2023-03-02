import { noteService } from '../services/note.service.js'

export default {
    props: ['note'],
    template: `
        <section class="note-edit">

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