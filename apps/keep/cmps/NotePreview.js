export default {
    props: ['note'],
    template: `
     <article class="note-preview">
        <div class="note-container">
            <h2> {{note.info.title}}  </h2>
            <p> {{note.info.txt}} </p>
        </div>
    </article>
    `,
}