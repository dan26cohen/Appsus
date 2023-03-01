export default {
    props: ['unReadCount'],
    template: `
        <section class="folder-list-items">
          <h1 style="cursor:pointer;" @click="filter('inbox')">📨 inbox <span>{{unReadCount}}</span></h1>
          <h1 style="cursor:pointer;"  @click="filter('starred')">⭐ starred</h1>
          <h1 style="cursor:pointer;" @click="filter('sent')">✈ sent</h1>
          <h1 style="cursor:pointer;" >📝 draft</h1>
          <h1 style="cursor:pointer;"  @click="filter('trash')">🗑️ trash</h1>
        </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        filter(filter) {
            this.$emit('folderFilter', filter)
        }
    }
}