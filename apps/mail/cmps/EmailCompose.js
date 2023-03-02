export default {
    props: [''],
    template: `
        <section class="compose">
            <header class="compose-header">
                <h3>New Message</h3>
                <div className="compose-buttons">
                    <button class="close-compose" @click="close"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </header>

            <main class="compose-text">
                <input  type="text" placeholder="Recipient"/>
                <input  type="text" placeholder="Subject"/>
                <textarea name="" id="" cols="49" rows="17"></textarea>
            </main>

            <section class="compose-send">
                <button className="send">send</button>
                <button className="delete"><i class="fa-regular fa-trash-can"></i></button>
            </section>
        </section>
        `,
        data(){
            return {
                
            }
        },
        methods: {
            close() {
                this.$emit('close')
            }
        }
    }