export default {
    props: ['email'],
    template: `
        <div class="email-preview">
            <h1>{{ email.subject}}</h1>
            <p>{{ email.body}}</p>
        </div>
    `,
}