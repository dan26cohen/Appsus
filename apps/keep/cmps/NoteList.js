import NotePreview from './NotePreview.js'
export default {
    props: ['notes'],
    template: `
     <section class="note-list-container">
            <ul class="note-list">
                <li v-for="note in notes" :key="note.id" class="note-li" :style="{'background-color': note.style?.backgroundColor || 'white'}" >
                    <NotePreview  :note="note" @remove=remove(note.id) @paint="paintNote(note.id,color)"
                    @save="update(note.id)"  @duplicate="duplicateNote(note.id)"/>
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
        },
        paintNote(noteId, color) {
            this.$emit('paint', noteId, color)
        }
    },

    components: {
        NotePreview,
    },
}

//