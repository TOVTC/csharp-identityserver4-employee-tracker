import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '@/router'
import mgr from '@/security/security.js'

Vue.config.productionTip = false

const globalData = {
  isAuthenticated: false,
  user: '',
  mgr: mgr
}

const globalMethods = {
  async authenticate(returnPath) {
    const user = await this.$root.getUser()
    if (!!user) {
      this.isAuthenticated = true
      this.user = user
    } else {
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
  signIn(returnPath) {
    returnPath ? this.mgr.signinRedirect({ state: returnPath }) : this.mgr.signinRedirect()
  }
}

new Vue({
  vuetify,
  router,
  data: globalData,
  methods: globalMethods,
  render: h => h(App)
}).$mount('#app')
