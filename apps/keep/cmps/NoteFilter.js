export default {
    props: [],
    template: `
            <section class="notes-filter">
                 <input v-model="filterBy.title" @input="filter" placeholder="Search Keeps's title..." type="text">
            </section>`,

    data() {
        return {

            filterBy: { title: '' }

        }
    },
    methods: {
        filter() {
            console.log('this.filterBy', this.filterBy)
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