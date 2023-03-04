export default {
    template: `
        <section class="home-page">
            <h1>Home sweet home!</h1>
            <div class="home-menu">
                <div>
                <router-link to="/email"> <img src="../../../assets/img/gmail.logo.png"></router-link>
                   
                    <h3>Get Your Own Email!</h3>
                </div>
                <div>
                <router-link to="/notes"><img src="../../../assets/img/google.keep.logo.png"></router-link>
                 
                    <h3>Keep Your Own Notes!</h3></h3>
                </div>
                <div>
                    <img src="../../../assets/img/books.logo.png">
                    <h3>Our Books</h3>
                </div>
            </div>
            </div>
        </section>
    `,
}
