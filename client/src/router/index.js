import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tracker',
    name: 'tracker',
    component: () => import('@/views/TrackerView.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: HomeView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router