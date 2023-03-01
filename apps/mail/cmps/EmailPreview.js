export default {
    props: ['email'],
    template: `
        <div class="email-preview">
            <h1 :class="email.isRead ? 'strong' : '' ">{{ email.from}}</h1>
            <h1 :class="email.isRead ? 'strong' : '' ">{{ email.subject}}</h1>
            <p :class="email.isRead ? 'strong' : '' ">{{ email.body}}</p>
        </div>
    `,
}