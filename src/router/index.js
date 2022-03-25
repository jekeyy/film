import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieView from '../views/movie/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'movie',
    // component: MovieView
	name: 'cinema',
	component: () => import('../views/cinema/index.vue')
  },
  {
    path: '/movie',
    name: 'movie',
	component: MovieView
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