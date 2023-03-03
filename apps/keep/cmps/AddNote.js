import { noteService } from '../services/note.service.js'

export default {
    props: ['notes'],
    template: ` 
    <form class="add-note-form" @click="setEditOn">
            <input placeholder="Title..." v-model="title" type="text" 
            class="add-title-input" :class="{'open':isEditorOn}"  >
            <div class="add-note-shown">
                <input placeholder="Take a note..." type="text" class="add-txt-input" v-model="txt" >
                <div class="editor-container">
                </div>
                <div class="note-type-btns">
                    <button title="Text Note"  @click="setNoteType('NoteTxt')">
                        <i class="fa-regular fa-comment"></i>
                    </button>
                    <button title="To-Do List Note"  @click="setNoteType('NoteTodos')">
                        <i class="fa-regular fa-square-check"></i>
                    </button>
                    <button title="Image Note"  @click="setNoteType('NoteImg')">
                        <i class="fa-regular fa-image"></i>
                    </button>
                </div>
            </div> 
            <div class="todos-container" v-if="type === 'NoteTodos'">
                <label>Todo Items:</label>
                    <div class="todo-list" v-for="(item, idx) in todoItems" :key="idx">
                        <input class="check-box-td"  type="checkbox" v-model="item.doneAt">
                        <input placeholder="Your Task Here..." class="todo-input" type="text" v-model="item.txt" :class="{ done: item.doneAt }">
                        <button class="todo-remove-btn" @click="removeTodoItem(idx)">x</button>
                    </div>
                    <div>
                        <button class="add-td-btn" @click="addTodoItem">+</button>
                    </div>
                    </div>
                    <div class="note-img-container" v-if="type === 'NoteImg'">
                        <input class="upload-img-input" type="file" @change="onImgUpload">
                        <img :src="imgUrl">
                    </div>
                    <div>
                        <button type="submit" @click="addNote" class="add-note-btn" :class="{'open':isEditorOn}">Save</button>
                    </div>
            </div>
    </form>`,

    data() {
        return {
            title: '',
            txt: '',
            type: 'NoteTxt',
            todoItems: [{ txt: '', doneAt: null }, { txt: '', doneAt: null }],
            imgUrl: '',
            isEditorOn: false,
        }
    },

    methods: {
        addNote() {
            const newNote = noteService.getEmptyNote()
            newNote.type = this.type
            newNote.info = {
                title: this.title,
                txt: this.txt,
                todos: this.todoItems,
                url: this.imgUrl,
            }
            noteService.addNewNote(newNote)
                .then(() => this.$emit('addNote', newNote))
                .then(() => {
                    this.title = ''
                    this.txt = ''
                    this.todoItems = [{ txt: '', doneAt: null }, { txt: '', doneAt: null }]
                    this.imgUrl = ''
                })
        },
        setNoteType(type) {
            this.type = type
            console.log('type', this.type)
            this.$emit('setNoteType', type)
        },
        addTodoItem() {
            this.todoItems.push({ txt: '', doneAt: false });
        },
        removeTodoItem(idx) {
            this.todoItems.splice(idx, 1);
        },
        onImgUpload(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.imgUrl = reader.result
                console.log('this.imgUrl', this.imgUrl)
            }
        },
        setEditOn() {
            this.isEditorOn = true
        },
    },
    computed: {

    },
    created() {

    },
    components: {
    },
    emits: [],
}
