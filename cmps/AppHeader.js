export default {
    template: `
        <header class="app-header">
            <nav >
                <div class="logo">
                    <h1>AppSus</h1>
                </div>
                <router-link to="/">Home</router-link>
                <router-link to="/email">Gmail</router-link>
                <router-link to="/notes">Notes</router-link>
                <router-link to="/book">Books</router-link>
                <router-link to="/about">About</router-link>
            </nav>
        </header>
    `,
}
