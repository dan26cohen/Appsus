import { noteService } from '../services/note.service.js'
export default {
    props: [],
    template: `
    <section class="notes-index">
    <RouterLink to="/notes">Add a car</RouterLink>
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
    components: {
noteService
    },
    emits: [],
}