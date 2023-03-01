import NotePreview from './NotePreview.js'
export default {
    props: ['notes'],
    template: `
     <section class="note-list-container">
            <ul class="note-list">
                <li v-for="note in notes" :key="note.id" class="note-li">
                    <NotePreview :note="note"/ @remove=remove(note.id)>
                </li>
            </ul>
    </section>`,
    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
        },

    },

    components: {
        NotePreview,
    },
}