export default {
    props: [''],
    template: `
        <section class="compose">
            <header class="compose-header">
                <h3>New Message</h3>
                <div className="compose-buttons">
                    <button class="minimize"><i class="fa-regular fa-window-minimize"></i></button>
                    <button class="full-screen"><i class="fa-solid fa-up-right-and-down-left-from-center"></i></button>
                    <button class="close" @click="close"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </header>

            <main class="compose-text">
                <input class="recipient" type="text" placeholder="Recipient"/>
                <input class="mail-subject" type="text" placeholder="Subject"/>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </main>

            <section class="send-mail flex justify-between">
                <button className="send">send</button>
                <button className="delete"><i class="fa-regular fa-trash-can"></i></button>
            </section>
        </section>
        `,}