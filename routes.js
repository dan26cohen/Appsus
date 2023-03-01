import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'
import EmailIndex from './apps/mail/pages/EmailIndex.js'
import EmailDetails from './apps/mail/pages/EmailDetails.js'
import NoteIndex from './apps/keep/pages/NoteIndex.js'

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: HomePage,
		},
		{
			path: '/email',
			component: EmailIndex,
		},
		{
			path: '/notes',
			component: NoteIndex,
		},
		{
			path: '/book',
			component: AboutUs,
		},
		{
			path: '/about',
			component: AboutUs,
		},
		{
            path: '/email/:emailId',
            component: EmailDetails
        },
	],
}

export const router = createRouter(routerOptions)
