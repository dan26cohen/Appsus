import EmailPreview from './EmailPreview.js'
import { EmailService } from "../services/EmailService.js"
import EmailFolderList from './EmailFolderList.js'
import EmailDetails from '../pages/EmailDetails.js'

export default {
    props: ['emails'],
    template: `
        <section class="email-list">
            <ul>

                <li v-for="email in emails" :key="email.id">
                    <div>
                    <EmailPreview @deleteEmail="deleteEmail" @star="starEmail"  @toggle="toggle(email)" :email="email" v-if=" listIsShown"/>
                </div>
                
            </li>
        </ul>
        <section>
                <EmailDetails :email="selectedEmail" v-if="detailsIsShown" />
                <button class="back-btn" @click="toggleExit" v-if="detailsIsShown" >back to list</button>

            </section>
        </section>
    `,
    data() {
        return {
            listIsShown: true,
            detailsIsShown: false,
            selectedEmail: null
        }
    },
    methods: {
        toggle(emailClicked) {
            this.selectedEmail = emailClicked
            this.$emit('readEmail',emailClicked)
            this.listIsShown = !this.listIsShown
            this.detailsIsShown = !this.detailsIsShown
        },
        toggleExit(){
            this.listIsShown = !this.listIsShown
            this.detailsIsShown = !this.detailsIsShown
        },
        deleteEmail(email){
            this.$emit('deleteEmail',email)
        },
        starEmail(email){
            this.$emit('starEmail',email)
        }
    },
    computed: {
        unReadCount() {
            if (!this.emails) return
            const unReadMails = this.emails.filter(email => (email.isRead === false))
            return unReadMails.length

        }
    },
    components: {
        EmailPreview,
        EmailFolderList,
        EmailDetails
    }
}