import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '@/router'
import mgr from '@/security/security.js'
import TrackerService from '@/services/TrackerService.js'

Vue.config.productionTip = false

const globalData = {
  isAuthenticated: false,
  user: '',
  mgr: mgr
}

const globalMethods = {
  async authenticate(returnPath) {
    // use the provided getUser method from the imported Oidc UserManager instance
    const user = await this.$root.getUser()
    if (!!user) {
      this.isAuthenticated = true
      this.user = user
    } else {
      // run the global signIn method, passing in the return path (where you're looking to navigate to in the app itself)
      await this.$root.signIn(returnPath)
    }
  },
  async getUser() {
    try {
      let user = await this.mgr.getUser()
      return user
    } catch (err) {
      console.log(err)
    }
  },
  // the signinRedirect and signoutRedirect methods are provided by the oidc-client package
  signIn(returnPath) {
    returnPath ? this.mgr.signinRedirect({ state: returnPath }) : this.mgr.signinRedirect()
  },
  signOut(returnPath){
    returnPath ? this.mgr.signoutRedirect({ state: returnPath }) : this.mgr.signoutRedirect()
  }
}

let v = new Vue({
  vuetify,
  router,
  // add the custom global data and methods to the Vue instance
  data: globalData,
  methods: globalMethods,
  render: h => h(App)
}).$mount('#app')

// import the new axios instance from the api service
TrackerService.apiClient.interceptors.request.use((config) => {
  // retrieve the access_token property from the signed in user
  const user = v.$root.user
  if (user) {
    const authToken = user.access_token
    // set that token as a bearer token in the authorization headers
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`
    }
  }
  return config;
},
(err) => {
  return err
})