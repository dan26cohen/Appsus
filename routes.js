import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'
import EmailIndex from './apps/mail/pages/EmailIndex.js'
import NoteIndex from './apps/keep/pages/NoteIndex.js'
import NoteEdit from './apps/keep/pages/NoteEdit.js'

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
			path: '/notes/+noteId',
			component: NoteEdit
		},
	],
}

export const router = createRouter(routerOptions)
