import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactIndex from '../views/ContactIndex.vue'
import ContactDetails from '../views/ContactDetails.vue'
import ContactEdit from '../views/ContactEdit.vue'
import StatsView from '../views/StatsView.vue'

const router = createRouter({
	// add hash
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/AboutView.vue')
		},
		{
			path: '/contact',
			name: 'contact',
			component: ContactIndex
		},
		{
			path: '/contact/:id',
			name: 'details',
			component: ContactDetails
		},
		{
			path: '/contact/edit/:id?',
			name: 'edit',
			component: ContactEdit
		},
		{
			path: '/stats',
			name: 'statistics',
			component: StatsView
		}
	]
})

export default router
