export default {
    props: ['info'],
    template: `
    <div class="img-note-container">
        <h2>{{info.title}}</h2>
        <p>{{info.txt}}</p>
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