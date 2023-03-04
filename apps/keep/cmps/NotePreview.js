import { noteService } from '../services/note.service.js'
import { EmailService } from '../../../apps/mail/services/EmailService.js'
import NoteColor from './NoteColor.js'
import NoteTxt from './NoteTxt.js'
import NoteTodos from './NoteTodos.js'
import NoteImg from './NoteImg.js'

export default {
    props: ['note'],
    template: `
     <article class="note-preview" @mouseover="showBtns=true" @mouseout="showBtns=false" >
        <div class="note-container" >
            <component :is="note.type" :info="note.info" @changeInfo="updateNote" />
            
            <div class="note-btns" :class="{'show': showBtns}">
                <i title="Delete" class="fa-regular fa-trash-can" @click="remove(note.id)" class="close-note-btn"></i>
                <i title="Duplicate Note" @click="duplicate(note.id)"  class="fa-regular fa-clone"></i>
                <i title="Paint Note" class="fa-solid fa-paintbrush" @click="togglePainter"></i>
                <i title="Edit Note"@click="edit(note)" class="fa-regular fa-pen-to-square"></i>
                <i title="Send As Email" @click="sendAsEmail(note)" class="fa-solid fa-at"></i>
            </div>
        </div>

        <NoteColor :note="note" @paint="paint" v-if="isPainterOn" @close="closeModal"/>

        <div class="edit-modal" :class="{'open':isEditModalOpen}">
            <input placeholder="Title..." type="text" class="edit-title-input" v-model="note.info.title">
            <input placeholder="Take a note..." type="text" class="edit-txt-input" v-model="note.info.txt">
            <ul class="todo-ul">
                <li v-for="(todo, index) in note.info.todos" :key="index">
                    <input type="checkbox" v-model="todo.doneAt" />
                    <span class="todos-txt" :class="{ done: todo.doneAt }">{{ todo.txt }}</span>
                </li>
            </ul>
            <img :src="note.info.url" class="edit-modal-img" :class="{'hide': !note.info.url }">
            <div class="edit-modal-btns">
                <button @click="close">close</button>
                <button @click="save(note.id)">save</button>
                <button @click="deletePhoto(note)" :class="{'hide': !note.info.url }">Remove Photo</button>
                <button @click="setUpload" :class="{'hide': !note.info.url }">Change Photo</button>
                <input class="upload-img-input" type="file" @change="onImgUpload($event,note)" :class="{'hide': !isUpload }">
            </div>
        </div>
    </article>
    `,
    data() {
        return {
            showBtns: false,
            selectedBgc: '',
            isEditMode: false,
            isUpload: false,
            isPainterOn: false,
            isEditModalOpen: false,
            imgUrl: '',
        }
    },
    methods: {
        edit(note) {
            this.isEditMode = true
            this.isEditModalOpen = true
            this.$emit('edit', note)
        },
        close() {
            this.isEditMode = false
            this.isEditModalOpen = false
        },
        duplicate() {
            this.$emit('duplicate')
        },
        save() {
            this.$emit('save')
            this.isEditMode = false;
            this.isEditModalOpen = false;
        },
        remove() {
            this.$emit('remove')
        },
        paint() {
            this.$emit('paint')
        },
        togglePainter() {
            this.isPainterOn = !this.isPainterOn
        },
        closeModal() {
            this.isPainterOn = false;
        },
        sendAsEmail(note) {
            const email = {
                subject: note.info.title,
                body: note.info.txt
            }
            console.log('email', email)
            EmailService.addEmail(email)
        },
        deletePhoto(note) {
            note.info.url = ''
            noteService.save(note)
        },
        setUpload() {
            this.isUpload = true
        },
        onImgUpload(event, note) {
            this.isUpload = true
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.imgUrl = reader.result
                note.info.url = reader.result
            }
            noteService.save(note)
            this.isUpload = false
        }

    },
    computed: {

    },

    components: {
        NoteColor,
        NoteTxt,
        NoteTodos,
        NoteImg,
    }
}