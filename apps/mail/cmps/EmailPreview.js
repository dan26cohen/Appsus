export default {
    props: ['email'],
    template: `
        <div class="email-preview" :class="email.isRead ? 'read' : 'unRead' ">
            <h1 :class="email.isRead ? '' : 'unRead' ">{{ email.from}}</h1>
            <h1 :class="email.isRead ? '' : 'unRead' ">{{ email.subject}}</h1>
            <p :class="email.isRead ? '' : 'unRead' " >{{ email.body}}</p>
            <h1 :class="email.isRead ? '' : 'unRead' " style="margin-left: auto">{{handleDate}}</h1>
        </div>
    `,

    computed: {
        handleDate() {
            var date = new Date(this.email.sentAt * 1000)
            let fixedDate = date.toLocaleDateString('en-us', {month:"long", day:"numeric"});
            return fixedDate

        }
    }
}