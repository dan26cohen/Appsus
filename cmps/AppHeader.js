export default {
    template: `
        <header class="app-header">
            <nav >
                <div class="logo">
                <router-link to="/">  <h1>AppSus</h1></router-link>
                </div>
                <div v-if="isShown" class="links-container">
           <div class="logos-container">
           <router-link @click="isShown=!isShown" to="/email"><img class="logo-btn"src="../img/Gmail-logo.png"></router-link>
           <router-link @click="isShown=!isShown" to="/notes"><img class="logo-btn"src="../img/notes.png"></router-link>

           </div>
           <div class="logos-container">

             <router-link @click="isShown=!isShown" to="/about"><img class="logo-btn"src="../img/about.png"></router-link>
             <router-link @click="isShown=!isShown" to="/book"><img class="logo-btn"src="../img/books.png">
                   
           </div>

                </div>
                <i @click="isShown=!isShown" class="fa-solid fa-bars"></i>
               
                </router-link>
            </nav>
        </header>
    `,
    data() {
        return {
            isShown: false
        }
    }
}
