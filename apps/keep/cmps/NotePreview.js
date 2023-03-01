export default {
    props: ['note'],
    template: `
     <article class="note-preview"  @mouseover="showBtns=true" @mouseout="showBtns=false">
        <div class="note-container">
            <h2> {{note.info.title}}  </h2>
            <p> {{note.info.txt}} </p>
            <div class="note-btns" :class="{'show': showBtns}">
                <i title="Delete" class="fa-regular fa-trash-can" @click="remove(note.id)" class="close-note-btn"></i>
                <i title="Paint" class="fa-solid fa-paintbrush"></i>
                <RouterLink :to="'/note/edit/'+note.id" >Edit Note</RouterLink> 
            </div>
        </div>
    </article>
    `,
    data() {
        return {
            showBtns: false,
        }
    },
    methods: {
        edit(noteId) {
            this.$emit('edit', noteId)
        }
    },
}