export default {
    props: ['info'],
    template: `
    <div class="img-note-container">
        <h1>{{info.title}}</h1>
        <img :src="info.url">
    </div>
    `,

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

    },
    emits: [],
}