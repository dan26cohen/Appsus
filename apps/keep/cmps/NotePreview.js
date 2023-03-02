import { noteService } from '../services/note.service.js'

export default {
    props: ['note'],
    template: `
     <article class="note-preview"  @mouseover="showBtns=true" @mouseout="showBtns=false" :style="{backgroundColor: bgc}">
        <div class="note-container">
            <h2> {{note.info.title}}  </h2>
            <p> {{note.info.txt}} </p>
            
            <div class="note-btns" :class="{'show': showBtns}">
                <i title="Delete" class="fa-regular fa-trash-can" @click="remove(note.id)" class="close-note-btn"></i>
                <i title="Duplicate Note" @click="duplicate(note.id)"  class="fa-regular fa-clone"></i>
                <input type="color" v-model="bgc">
                <a @click="edit(note.id)">Edit Note </a>
            </div>
        </div>
    </article>
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
            bgc: '',
            isEditMode: false,
        }
    },
    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
        },
        edit(noteId) {
            this.isEditMode = true
            this.$emit('blur')
        },
        close() {
            this.isEditMode = false
        },
        save(noteId) {
            this.$emit('save', noteId)
        },
        duplicate(noteId) {
            this.$emit('duplicate', noteId)
        }
    },



    computed: {

    }
}