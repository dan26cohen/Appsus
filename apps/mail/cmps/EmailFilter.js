import EmailCompose  from "../cmps/EmailCompose.js"
export default {
    template: `
        <section >
        <button @click="openCompose" ><i class="fa-regular fa-pen-to-square" ></i> Compose</button>
        <EmailCompose 
          v-if="isOpen"
          @closeCompose="closeModal"
          />
            <input 
                v-model="filterBy.title"
                @input="filter" 
                placeholder="Search"
                type="text" />
        </section>
    `,
    data() {
        return {
            filterBy: { title: ''},
            isOpen:false
        }
    },
    methods: {
        filter(){
            this.$emit('filter', this.filterBy)
        },
        openCompose(){
            this.isOpen= !this.isOpen
        }
    },
    components: {
        EmailCompose 
   }
}