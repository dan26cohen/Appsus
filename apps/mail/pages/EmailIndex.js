import { EmailService } from '../services/EmailService.js'
import EmailFilter from '../cmps/EmailFilter.js'
import EmailList from '../cmps/EmailList.js'

export default {
    template: `
    <Section class="email-index">
        <h1>inbox</h1>
        <EmailFilter class="search" @filter="setFilterBy"/>
        <EmailList
                :emails="filteredEmails" 
        />

    </Section>
    


`,
    data() {
        return {
            emails: null,
            selectedEmail: null,
            filterBy: {},
        }
    },
    computed: {
        filteredEmails() {
            const regex = new RegExp(this.filterBy.title, 'i')
            return this.emails.filter(email=> regex.test(email.subject))
        }
    },
    methods: {
        setFilterBy(filterBy) {
            this.filterBy = filterBy
            console.log(this.filterBy);
        }

    },
    created() {
        EmailService.query()
            .then(emails => this.emails = emails)
    },
    components: {
        EmailService,
        EmailFilter,
        EmailList,

    }












}