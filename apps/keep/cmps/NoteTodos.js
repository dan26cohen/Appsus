export default {
    props: ['info'],
    template: `
    <div class="note-todos">
        <div>
            <h2>{{ info.title }}</h2>
            <p>{{ info.txt }}</p>
        </div>
    <ul class="todo-ul">
      <li v-for="(todo, index) in info.todos" :key="index">
        <input type="checkbox" v-model="todo.doneAt" />
        <span :class="{ done: todo.doneAt }">{{ todo.txt }}</span>
      </li>
    </ul>
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