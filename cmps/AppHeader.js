export default {
    template: `
        <header class="app-header">
            <nav >
                <div class="logo">
                    <h1>AppSus</h1>
                </div>
                <router-link to="/">Home</router-link>
                <router-link to="/email"> <i class="fa-regular fa-envelope"></i></router-link>
                <router-link to="/notes"><i class="fa-regular fa-note-sticky"></i></router-link>
                <router-link to="/book"><i class="fa-solid fa-book"></i>
                </router-link>
                <router-link to="/about">About</router-link>
            </nav>
        </header>
    `,
}
