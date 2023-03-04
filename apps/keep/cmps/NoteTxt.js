import { noteService } from '../services/note.service.js'
import NoteFilter from '../cmps/NoteFilter.js'
import NoteList from '../cmps/NoteList.js'



export default {
    props: ['info'],
    template: `
    <section class="notes-txt-container">
        <div>
            <h2> {{info.title}} </h2>
        </div>
            <p> {{info.txt}} </p>
    </section>`,

    data() {
        return {

        }
    },
    methods: {

    },

    computed: {

    },

    created() {

    },

    emits: [],
}