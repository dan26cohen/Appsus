import { noteService } from '../services/note.service.js'
import { utilService } from '../../../services/util.service.js'

export default {
    props: ['notes'],
    template: ` 
    <form class="add-note-form">
            <input placeholder="Title..." v-model="title" type="text" class="add-title-input" >
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
                         <div v-for="(item, idx) in todoItems" :key="idx">
                         <input  type="checkbox" v-model="item.doneAt">
                         <input class="todo-input" type="text" v-model="item.txt" :class="{ done: item.doneAt }">
                         <button @click="removeTodoItem(idx)">x</button>
                        </div>
                        <button @click="addTodoItem">Add Todo Item</button>
                    </div>
            <button type="submit" @click="addNote" class="add-btn">Add Note</button>
    </form>`,

    data() {
        return {
            title: '',
            txt: '',
            type: 'NoteTxt',
            todoItems: [{ txt: 'Task', doneAt: null }],
            imgUrl: '',
        }
    },

    methods: {
        addNote() {
            debugger
            const newNote = noteService.getEmptyNote()
            newNote.type = this.type
            newNote.info = {
                title: this.title,
                txt: this.txt,
                todos: this.todoItems,
                url: this.imgUrl,
            }
            noteService.addNewNote(newNote)
                .then(() => console.log('note added'))
                .then(() => this.$emit('addNote', newNote))
        },
        setNoteType(type) {
            this.type = type
            console.log('type', this.type)
            this.$emit('setNoteType', type)
        },
        addTodoItem() {
            this.todoItems.push({ txt: 'Task', doneAt: false });
        },
        removeTodoItem(idx) {
            this.todoItems.splice(idx, 1);
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