import NotePreview from './NotePreview.js'
import { noteService } from '../services/note.service.js'

export default {
    props: ['notes', 'pinnedNotes'],
    template: `
     <section class="note-list-container" :class="{'blur':isEditMode}">
        <div class="pinned-notes">
            <ul class="note-list">
                <h1>Pinned Keeps:</h1>
                <li v-for="note in pinnedNotes" :key="note.id" class="note-li" :style="{'background-color': note.style?.backgroundColor || white}">
                    <NotePreview  :note="note"  @remove=remove(note.id)  @paint=paint @edit='edit' @unpin='unpin'
                    @save="update(note.id)"  @duplicate="duplicateNote(note.id)"/>
                </li>
            </ul>
        </div>
        <div class="unpinned-notes">
            <ul class="note-list">
                <h1>Your Keeps:</h1>
                <li v-for="note in notes" :key="note.id" class="note-li" :style="{'background-color': note.style?.backgroundColor || white}" >
                    <NotePreview  :note="note" @remove=remove(note.id)  @paint=paint @edit='edit' @unpin='unpin'
                    @save="update(note.id)"  @duplicate="duplicateNote(note.id)"/>
                </li>
            </ul>
        </div>
    </section>`,
    data() {
        return {
            selectedNote: null,
            isEditMode: false,
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
        paint() {
            this.$emit('paint')
        },
        edit(note) {
            this.isEditMode = true
        },
        unpin(note) {
            this.$emit('unpin', note)
        }

    },
    components: {
        NotePreview,
    },
}
