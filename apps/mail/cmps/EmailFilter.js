import EmailCompose from "../cmps/EmailCompose.js"
export default {
    template: `
        <section >
        <button class="compose-btn" @click="openCompose" ><i class="fa-regular fa-pen-to-square" ></i> Compose</button>
        <EmailCompose 
          v-if="isOpen"
          @addEmail="addEmail"
          @close="closeCompose"
          />
            <input class="search-input" 
                v-model="filterBy.title"
                @input="filter" 
                placeholder="Search"
                type="text" />
        </section>
    `,
    data() {
        return {
            filterBy: { title: '' },
            isOpen: false
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy)
        },
        openCompose() {
            this.isOpen = !this.isOpen
        },
        closeCompose() {
            this.isOpen = !this.isOpen
        },
        addEmail(email){
            this.$emit('addEmail',email)
        }
    },
    components: {
        EmailCompose
    }
}