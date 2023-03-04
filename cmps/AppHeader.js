export default {
    template: `
        <header class="app-header">
            <nav >
                <div class="logo">
                <router-link to="/"><img class="logo-head" src="../assets/img/logo.jpeg"></router-link>
                </div>
                <div v-if="isShown" class="links-container">
           <div class="logos-container">
           <router-link @click="isShown=!isShown" to="/email"><img class="logo-btn" src="../assets/img/Gmail-logo.png"></router-link>
           <router-link @click="isShown=!isShown" to="/notes"><img class="logo-btn" src="../assets/img/google.keep.logo.png"></router-link>

           </div>
           <div class="logos-container">

             <router-link @click="isShown=!isShown" to="/about"><img class="logo-btn" src="../assets/img/about-3.png"></router-link>
             <router-link @click="isShown=!isShown" to="/book"><img class="logo-btn" src="../assets/img/books.logo.png"></router-link>
                   
           </div>

                </div>
                <i style="scale:1.4;" @click="isShown=!isShown" class="fa-solid fa-bars "></i>               
            </nav>
        </header>
    `,
    data() {
        return {
            isShown: false
        }
    }
}
