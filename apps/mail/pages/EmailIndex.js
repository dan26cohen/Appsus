import { EmailService } from '../services/EmailService.js'
import EmailFilter from '../cmps/EmailFilter.js'
import EmailList from '../cmps/EmailList.js'
import EmailFolderList from '../cmps/EmailFolderList.js'

export default {
    template: `
    <Section class="email-index">
        <EmailFilter class="search" @filter="setFilterBy"/>
        <div class="list-container">
            <EmailFolderList :unReadCount="unReadCount" @folderFilter='folderFilter'/>
            <EmailList
                    :emails="filteredEmails" 
            />
        </div>

    </Section>
    


`,
    data() {
        return {
            emails: null,
            selectedEmail: null,
            filterBy: {},
            unReadCount: null
        }
    },
    computed: {
        filteredEmails() {
            if (!this.emails) return
            let emails = this.emails
            const regex = new RegExp(this.filterBy.title, 'i')
            emails = emails.filter(email => regex.test(email.subject))
            emails = emails.filter(email => email.status === this.filterBy.status)
            console.log(emails);
            return emails
        }
    },
    methods: {
        setFilterBy(filterBy) {
            this.filterBy = filterBy
        },
        folderFilter(filter) {
            console.log(filter);
            this.filterBy.status = filter
            console.log(this.filterBy);
        }

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