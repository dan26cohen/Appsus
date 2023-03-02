import NotePreview from './NotePreview.js'
import { noteService } from '../services/note.service.js'

export default {
    props: ['notes'],
    template: `
     <section class="note-list-container">
            <ul class="note-list">
                <li v-for="note in notes" :key="note.id" class="note-li" :style="{'background-color': note.style?.backgroundColor || white}" @click="selectNote(note.id)" >
                    <NotePreview  :note="note" @remove=remove(note.id)  @paint=paint
                    @save="update(note.id)"  @duplicate="duplicateNote(note.id)"/>
                </li>
            </ul>
    </section>`,
    data() {
        return {
            selectedNote: null,
        }
    },
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

        selectNote(noteId) {
            console.log('noteId', noteId)
            noteService.getNoteById(noteId).then(note => this.selectedNote = note)
            console.log('this.selectedNote', this.selectedNote)
        },
        paint() {
            this.$emit('paint')
        }

    },
    components: {
        NotePreview,
    },
}
