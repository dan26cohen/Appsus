import EmailPreview from './EmailPreview.js'

export default {
    props: ['emails'],
    template: `
        <section class="email-list">
            <ul>
                <li v-for="email in emails" :key="email.id">
                    <div @click="hello(email)">
                    <!-- <button class="delete" @click="remove(book.id)">x</button> -->
                    <RouterLink class="green" :to="'/email/'+email.id">
                    <EmailPreview  :email="email"/>
                    </RouterLink> 
                    </div>
                    
                </li>
            </ul>
        </section>
    `,
    methods: {
        // remove(bookId) {
        //     this.$emit('remove', bookId)
        // },
        hello(email){
            console.log('email');
        }
    },
    components: {
        EmailPreview
    }
}