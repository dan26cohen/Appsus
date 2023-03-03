import { noteService } from '../../../apps/keep/services/note.service.js'
import { utilService } from '../../../services/util.service'

export default {
    props: [''],
    template: `
        <form @submit.prevent="sendEmail" class="compose">
            <header class="compose-header">
                <h3 style="padding:5px">New Message</h3>
                <div className="compose-buttons">
                    <button class="close-compose" @click="close"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </header>

            <main class="compose-text">
                <input v-model="email.to" type="text" placeholder="Recipient"/>
                <input v-model="email.subject"  type="text" placeholder="Subject"/>
                <textarea v-model="email.body" name="" id="" cols="49" rows="17"></textarea>
            </main>

            <section class="compose-send">
                <button className="send">send</button>
                <button @click="sendNote" className="send">send to note</button>
                <button className="delete"><i class="fa-regular fa-trash-can"></i></button>
            </section>
        </form>
        `,
    data() {
        return {
            email: {
                subject: '',
                body: '',
                to: '',
            }
        }
    },
    methods: {
        close() {
            this.$emit('close')
        },
        sendEmail() {
            console.log(this.email);
            this.$emit('addEmail', this.email)
            this.$emit('close')

           
        },
        sendNote(){
            const note = {
                type: 'NoteTxt',
                isPinned:false,
                info: {
                    title: this.email.subject,
                    txt: this.email.body,
                },
                style:{
                    backgroundColor:'red'
                },
                createdAt: utilService.getCurrDate()
                
            }
   
            noteService.addNewNote(note)
        }
    }
}