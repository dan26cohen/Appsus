export default {
    props: ['unReadCount'],
    template: `
        <section class="folder-list-items">
          <h1 @click="filter('inbox')">📨 inbox <span>{{unReadCount}}</span></h1>
          <h1 @click="filter('starred')">⭐ starred</h1>
          <h1 @click="filter('sent')">✈ sent</h1>
          <h1>📝 draft</h1>
          <h1 @click="filter('trash')">🗑️ trash</h1>
        </section>
    `,
    data() {
        return {

        }
    },
    methods: {
      filter(filter){
        this.$emit('folderFilter',filter)
      }
    }
}