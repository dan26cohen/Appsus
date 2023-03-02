import { EmailService } from "../services/EmailService.js"
export default {
    props: ['email'],
    template: `
        <section class="email-details" v-if="email">
            <h1 class="email-sender"> from : {{email.from}}</h1>
            <h1>{{email.subject}}</h1>
            <p>{{email.body}}</p>
            <!-- <button @click="delete">x</button> -->
            <!-- <button @click="delete">delete</button> -->
            <!-- <button @click="deleteEmail" className="delete"><i class="fa-regular fa-trash-can"></i></button> -->
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