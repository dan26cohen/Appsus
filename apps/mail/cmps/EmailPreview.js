export default {
    props: ['email'],
    template: `
        <div class="email-preview" :class="email.isRead ? 'read' : 'unRead' ">
            <h1 :class="email.isRead ? '' : 'unRead' ">{{ email.from}}</h1>
            <h1 :class="email.isRead ? '' : 'unRead' ">{{ email.subject}}</h1>
            <p >{{ email.body}}</p>
        </div>
    `,
}