import { EmailService } from '../services/EmailService.js'
export default {
    props: [''],
    template: `
        <form @submit.prevent="sendEmail" class="compose">
            <header class="compose-header">
                <h3>New Message</h3>
                <div className="compose-buttons">
                    <button class="close-compose" @click="close"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </header>

            <main class="compose-text">
                <input v-model="email.to" type="text" placeholder="Recipient"/>
                <input v-model="email.subject"  type="text" placeholder="Subject"/>
                <textarea v-model="email.body" name="" id="" cols="49" rows="17"></textarea>
            </main>

            <section class="compose-send">
                <button className="send">send</button>
                <button className="delete"><i class="fa-regular fa-trash-can"></i></button>
            </section>
        </form>
        `,
    data() {
        return {
            email: {
                subject: '',
                body: '',
                to: '',
            }
        }
    },
    methods: {
        close() {
            this.$emit('close')
        },
        sendEmail() {
            console.log(this.email);
            this.$emit('addEmail', this.email)
            this.$emit('close')

        }
    }
}