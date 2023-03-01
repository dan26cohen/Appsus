import EmailPreview from './EmailPreview.js'

export default {
    props: ['emails'],
    template: `
        <section class="email-list">
            <ul>
                <li v-for="email in emails" :key="email.id">
                    <button class="delete" @click="remove(book.id)">x</button>
                    <EmailPreview :email="email"/>
                </li>
            </ul>
        </section>
    `,
    methods: {
        // remove(bookId) {
        //     this.$emit('remove', bookId)
        // },
    },
    components: {
        EmailPreview
    }
}