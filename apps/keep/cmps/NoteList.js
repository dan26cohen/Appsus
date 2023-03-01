import NotePreview from './NotePreview.js'
export default {
    props: ['notes'],
    template: `
     <section class="note-list-container">
            <ul class="note-list">
                <li v-for="note in notes" :key="note.id" class="note-li">
                    <NotePreview :note="note"/>
                    <RouterLink :to="'/note/edit/'+note.id" >Edit Note</RouterLink> 
                    <div class="note-btns">
                    <i class="fa-regular fa-trash-can" @click="remove(note.id)" class="close-note-btn"></i>
                    <i class="fa-solid fa-paintbrush"></i>
                    </div>
                </li>
            </ul>
    </section>`,
    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
        },
        edit(noteId) {
            this.$emit('edit', noteId)
        }
    },
    components: {
        NotePreview,
    },
}