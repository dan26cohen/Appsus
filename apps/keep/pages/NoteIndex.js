import { noteService } from '../services/note.service.js'
import NoteFilter from '../cmps/NoteFilter.js'
import NoteList from '../cmps/NoteList.js'


export default {
    template: `
    <section class="notes-index">
        <NoteList :notes="notes" />
    </section>`,

    data() {
        return {
            notes: null,
        }
    },
    methods: {

    },
    computed: {

    },
    created() {
        noteService.query()
            .then(notes => this.notes = notes)
    },
    components: {
        NoteFilter,
        NoteList,
    },
    emits: [],
}