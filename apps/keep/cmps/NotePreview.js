import { noteService } from '../services/note.service.js'
import NoteColor from './NoteColor.js'

export default {
    props: ['note'],
    template: `
     <article class="note-preview"  @mouseover="showBtns=true" @mouseout="showBtns=false">
        <div class="note-container">
            <h2> {{note.info.title}}  </h2>
            <p> {{note.info.txt}} </p>
            
            <div class="note-btns" :class="{'show': showBtns}">
                <i title="Delete" class="fa-regular fa-trash-can" @click="remove(note.id)" class="close-note-btn"></i>
                <i title="Duplicate Note" @click="duplicate(note.id)"  class="fa-regular fa-clone"></i>
                <i title="Paint Note" class="fa-solid fa-paintbrush" @click="openPainter"></i>
                <a @click="edit(note.id)">Edit Note </a>
            </div>
        </div>
    </article>
    <NoteColor :note="note" @paint="paint" v-if="isPainterOn" @close="closeModal"/>
    <div class="edit-modal" :class="{'open':isEditMode}">
        <input placeholder="Title..." type="text" class="add-title-input" v-model="note.info.title">
        <input placeholder="Take a note..." type="text" class="add-txt-input"  v-model="note.info.txt">
        <button @click="close">close</button>
        <button @click="save(note.id)">save</button>
    </div>
    `,
    data() {
        return {
            showBtns: false,
            selectedBgc: '',
            isEditMode: false,
            isPainterOn: false,
        }
    },
    methods: {
        edit(noteId) {
            this.isEditMode = true
            this.$emit('blur')
        },
        close() {
            this.isEditMode = false
        },
        duplicate() {
            this.$emit('duplicate')
        },
        save() {
            this.$emit('save')
        },
        remove() {
            this.$emit('remove')
        },
        paint() {
            this.$emit('paint')
        },
        openPainter() {
            this.isPainterOn = !this.isPainterOn
        },
        closeModal() {
            this.isPainterOn = false;
        }


    },
    computed: {

    },

    components: {
        NoteColor,
        noteService,
    }
}