import NotePreview from './NotePreview.js'
export default {
    props: ['notes'],
    template: `
     <section class="note-list-container">
            <ul class="note-list">
                <li v-for="note in notes" :key="note.id" class="note-li">
                    <NotePreview style="color: red;" :note="note"/ @remove=remove(note.id) @save="update(note.id)"  @duplicate="duplicateNote(note.id)">
                </li>
            </ul>
    </section>`,
    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
        },
        update(noteId) {
            this.$emit('update', noteId)
        },
        duplicateNote(noteId) {
            this.$emit('duplicate', noteId)
        }
    },

    components: {
        NotePreview,
    },
}