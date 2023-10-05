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
    // protected route/page
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/TrackerView.vue'),
  },
  {
    path: '/about-contact',
    name: 'about-contact',
    component: () => import('@/views/AboutContactView.vue'),
  },
  {
    path: '/callback',
    name: 'callback',
    component: () => import('@/views/CallbackView.vue')
  },
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: () => import('@/views/UnauthorizedView.vue')
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

// check if requested route requires authorization, then check if user is authorized, if not, redirect to login
router.beforeEach(async (to, from, next) => {
  // router.app refers to Vue instance with our global variables/methods
  let app = router.app || { isAuthenticated: false }
  if (app.isAuthenticated) {
    next()
    // if meta tag of route requires authentication and user is not authenticated, run global authenticate method
  } else if (to.matched.some(record => record.meta.requiresAuth)) {
   app.authenticate(to.path).then(() => {
      console.log('authenticating a protected url: ', to.path)
      next()
    })
  } else {
      next()
    }
  })

export default router