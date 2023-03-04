export default {
    props: [],
    template: `
            <section class="notes-filter">
                 <input type="text" class="search-title-input"
                 v-model="filterBy.title" 
                 @input="filter" 
                 placeholder="Search Keeps's title..." >
                <select class="type-filter" @change="setType($event.target.value)">
                   <option value="NoteTxt">Text</option>
                   <option value="NoteImg">Images</option>
                   <option value="NoteTodos">Todo Lists</option>
                </select>
            </section>`,


    data() {
        return {
            filterBy: { title: '', type: '' }
        }
    },
    methods: {
        filter() {
            console.log('this.filterBy', this.filterBy)
            this.$emit('filter', this.filterBy)
        },
        setType(type) {
            this.filterBy.type = type
            this.$emit('filter', this.filterBy)
        }
    },
    computed: {

    },
    created() {

    },
    components: {

    },
    emits: ['filter'],
}