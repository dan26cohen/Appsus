import { EmailService } from '../services/EmailService.js'
import EmailFilter from '../cmps/EmailFilter.js'
import EmailList from '../cmps/EmailList.js'
import EmailFolderList from '../cmps/EmailFolderList.js'

export default {
    template: `
    <Section class="email-index">
        <EmailFilter  class="search" @addEmail="addEmail" @filter="setFilterBy"/>
        <div class="list-container">
            <EmailFolderList :unReadCount="unReadCount" @folderFilter='folderFilter'/>
            <EmailList
                    :emails="filteredEmails" 
                    @readEmail="readEmail"
                    @deleteEmail="deleteEmail"
                    @starEmail="starEmail"

            />
        </div>

    </Section>
    


`,
    data() {
        return {
            emails: null,
            selectedEmail: null,
            filterBy: { status: 'inbox' },
            unReadCount: null,

        }
    },
    computed: {
        filteredEmails() {
            if (!this.emails) return
            let emails = this.emails
            const regex = new RegExp(this.filterBy.title, 'i')
            emails = emails.filter(email => regex.test(email.subject))
            emails = emails.filter(email => email.status === this.filterBy.status)
            console.log(this.filterBy.status);
            console.log(this.emails[5].status);
            return emails
        }
    },
    methods: {
        setFilterBy(filterBy) {
            this.filterBy = { ...this.filterBy, ...filterBy }
        },
        folderFilter(filter) {
            this.filterBy.status = filter
        },
        readEmail(email) {
            this.searchDisplay = false
            let emails = EmailService.readEmail(email)
            this.emails = emails
            const unReadMails = emails.filter(email => (email.isRead === false && email.status === 'inbox'))
            this.unReadCount = unReadMails.length
        },
        deleteEmail(email) {
            EmailService.deleteEmail(email).then(newEmails => {
                this.emails = newEmails
            })
        },
        starEmail(email) {
            EmailService.starEmail(email).then(newEmails => {
                this.emails = newEmails
            })
        },
        addEmail(email) {
            EmailService.addEmail(email).then(newEmail => {
                this.emails.unshift(newEmail)
                this.unReadCount++

            })
        },


    },
    created() {
        EmailService.query()
            .then(emails => {
                this.emails = emails
                const unReadMails = emails.filter(email => (email.isRead === false && email.status === 'inbox'))
                this.unReadCount = unReadMails.length
            })
    },
    components: {
        EmailService,
        EmailFilter,
        EmailList,
        EmailFolderList
    }












}