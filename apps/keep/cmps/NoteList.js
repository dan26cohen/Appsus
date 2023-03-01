import NotePreview from './NotePreview.js'
export default {
    props: ['notes'],
    template: `
     <section class="note-list">
            <ul>
                <li v-for="note in notes" :key="note.id">
                    <button @click="remove(note.id)">x</button>
                    <NotePreview :note="note"/>
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