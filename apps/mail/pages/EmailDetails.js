import { EmailService } from "../services/EmailService.js"
export default {

    template: `
        <section class="email-details" v-if="email">
            <h1 class="email-sender"> from : {{email.from}}</h1>
            <h1>{{email.subject}}</h1>
            <p>{{email.body}}</p>
            <RouterLink to="/email">Back to list</RouterLink>
        </section>
    `,
    data() {
        return {
            email: null,
        }
    },
    methods: {
        loadEmail() {
            EmailService.get(this.emailId)
                .then(email => {
                    email.isRead = true
                    this.email = email
                    EmailService.save(this.email)
                }
                )
        },
    },
    computed: {
        emailId() {
            return this.$route.params.emailId
        },

    }, created() {
        this.loadEmail()
    },
}