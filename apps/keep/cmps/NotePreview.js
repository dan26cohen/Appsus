export default {
    props: ['note'],
    template: `
     <article class="note-preview">
            <h1>Note</h1>
            <pre>{{note}}</pre>
    </article>
    `,
}