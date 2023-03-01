export default {
    props: ['email'],
    template: `
        <div class="email-preview">
            <h2>{{ email.subject}}</h2>
        </div>
    `,
}