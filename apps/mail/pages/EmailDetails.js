import { EmailService } from "../services/EmailService.js"
export default {
    props: ['email'],
    template: `
        <section class="email-details" v-if="email">
            <div class="head">
                <h1 style="font-size: 0.8em" class="email-sender"> from : {{email.from}}</h1>
                <h1 style="font-size: 1em" >{{email.subject}}</h1>
            </div>
            <p style="font-size: 1em">{{email.body}}</p>
        </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        // loadEmail() {
        //     EmailService.get(this.emailId)
        //         .then(email => {
        //             email.isRead = true
        //             this.email = email
        //             EmailService.save(this.email)
        //         }
        //         )
        // },
        deleteEmail() {
            console.log('hey');
            EmailService.get(this.email.id)
                .then(email => {
                    email.removedAt = Date.now()
                    email.status = 'trash'
                    console.log(email);
                   
                }
                )
        }
    },
    computed: {
        // emailId() {
        //     return this.$route.params.emailId
        // },
    }
}