import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieView from '../views/movie/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'movie',
    component: MovieView,
	redirect:'/movie/coming'
	// name: 'cinema',
	// component: () => import('../views/cinema/index.vue')
  },
  {
    path: '/movie',
    name: 'movie',
	component: MovieView,
	children: [
		{
			path: 'city',
			name: 'city',
			component:  () => import('../components/City.vue')
		},
		{
			path: 'now',
			name: 'now',
			component:  () => import('../components/Now.vue')
		},
		{
			path: 'coming',
			name: 'coming',
			component:  () => import('../components/Coming.vue')
		},
		{
			path: 'search',
			name: 'search',
			component:  () => import('../components/Search.vue')
		},
		// {
		// 	path:'/',
		// 	redirect:'/movie/now'
		// }
		
	]
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/cinema',
    name: 'cinema',
    component: () => import('../views/cinema/index.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
