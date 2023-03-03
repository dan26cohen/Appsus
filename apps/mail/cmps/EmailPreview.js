export default {
    props: ['email'],
    template: `
        <div class="email-preview" :class="email.isRead ? 'read' : 'unRead' ">
            <input type="checkbox" />
            <i class="fa-regular fa-star"></i>
            <h1 @click="toggle" style="font-family:'Roboto';" :class="email.isRead ? '' : 'unRead' ">{{ email.from}}</h1>
            <h1  @click="toggle" style="font-family:'Roboto';" :class="email.isRead ? '' : 'unRead' ">{{ email.subject}}</h1>
            <p  @click="toggle" style="font-family:'Roboto';" :class="email.isRead ? '' : 'unRead' " >{{ email.body}}</p>
            <div class="end-prev" style="margin-left: auto">
                <button @click="deleteEmail" className="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                <button  className="delete-btn"><i class="fa-sharp fa-regular fa-envelope"></i></button>
                <button  className="delete-btn"><i class="fa-solid fa-box-archive"></i></button>
                <button  className="delete-btn"><i class="fa-regular fa-clock"></i></button>
                <h1 class="date" :class="email.isRead ? '' : 'unRead' " >{{handleDate}}</h1>
            </div>
        </div>
    `,

    computed: {
        handleDate() {
            var date = new Date(this.email.sentAt * 1000)
            let fixedDate = date.toLocaleDateString('en-us', { month: "short", day: "numeric" });
            return fixedDate
        }
    },
    methods: {
        deleteEmail() {
            this.$emit('deleteEmail', this.email)
        },
        toggle() {
            this.$emit('toggle', this.email)
        }
    }
}