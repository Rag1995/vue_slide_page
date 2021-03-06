import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { index: 0 },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { index: 1 },
  },
  {
    path: '/other',
    name: 'Other',
    component: () => import('../views/Other.vue'),
    meta: { index: 2 },
  },
]

const router = new VueRouter({
  routes
})

export default router
