export default {
    template: `
    <div class="color-modal">
        <ul class="color-list">
            <li @click="setColor('white')" class="color-li" style="backgroundColor:white"></li>
            <li @click="setColor('black')" class="color-li" style="backgroundColor:black"></li>
            <li @click="setColor('lime')" class="color-li" style="backgroundColor:lime"></li>
            <li @click="setColor('yellow')" class="color-li" style="backgroundColor:yellow"></li>
            <li @click="setColor('lightcoral')" class="color-li" style="backgroundColor:lightcoral"></li>
            <li @click="setColor('lightblue')" class="color-li" style="backgroundColor:lightblue"></li>
            <li @click="setColor('purple')" class="color-li" style="backgroundColor:purple"></li>
        </ul>
    </div>
`,
    data() {
        return {
            pickedColor: '',
        }
    },
    methods: {
        setColor(color) {
            this.pickedColor = color
            this.$emit('color', this.pickedColor)
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