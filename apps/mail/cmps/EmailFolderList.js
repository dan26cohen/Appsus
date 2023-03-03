export default {
    props: ['unReadCount'],
    template: `
        <section class="folder-list-items">
       
          <h1 class="folder-h1" @click="filter('inbox')"> <i class="fa-solid fa-inbox"></i>inbox<span>({{unReadCount}})</span></h1>
          <h1 class="folder-h1"   @click="filter('starred')"><i class="fa-regular fa-star"></i>starred</h1>
          <h1 class="folder-h1"  @click="filter('sent')"><i class="fa-regular fa-paper-plane"></i>sent</h1>
          <h1 class="folder-h1"  ><i class="fa-regular fa-file"></i>draft</h1>
          <h1 class="folder-h1"  @click="filter('trash')"><i class="fa-solid fa-trash-can"></i>trash</h1>
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