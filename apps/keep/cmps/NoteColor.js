import { noteService } from '../services/note.service.js'

export default {
    props: ['note'],
    template: `
    <div class="color-modal">
        <ul class="color-ul">
            <li @click="setColor('white',note.id)" class="color-li" style="backgroundColor:antique"></li>
            <li @click="setColor('orange',note.id)" class="color-li" style="backgroundColor:orange"></li>
            <li @click="setColor('lime',note.id)" class="color-li" style="backgroundColor:green"></li>
            <li @click="setColor('yellow',note.id)" class="color-li" style="backgroundColor:yellow"></li>
            <li @click="setColor('lightcoral',note.id)" class="color-li" style="backgroundColor:lightcoral"></li>
            <li @click="setColor('lightblue',note.id)" class="color-li" style="backgroundColor:lightblue"></li>
            <li @click="setColor('purple',note.id)" class="color-li" style="backgroundColor:purple"></li>
        </ul>
    </div>
`,
    data() {
        return {
        }
    },
    methods: {
        setColor(color, id) {
            noteService.paintNote(id, color)
                .then(console.log('note painted'))
        },
    },
    computed: {

    },
    created() {
        this.pickedColor = 'white'
    },
    components: {

    },
}