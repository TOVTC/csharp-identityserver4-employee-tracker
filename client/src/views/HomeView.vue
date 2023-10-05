<template>
  <v-container>
    <v-row v-if="!this.$root.isAuthenticated" class="my-5">
      <v-col
        class="ma-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Welcome
        </h2>

        <v-row class="ma-5">
          <v-card
            width="35%"
          >
            <v-card-text>
              <h2>Login</h2>
              <p class="my-3">
                Please login to view employee information. You will be redirected to an external portal.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="green accent-4"
                @click="login"
              >
                Redirect Me
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        class="ma-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Protect employee information
        </h2>

        <v-row class="ma-5">
          <v-card
            width="35%"
          >
            <v-card-text>
              <h2>Logout</h2>
              <p class="my-3">
                Make sure to logout of your account by clicking on the button below. You will be redirected to an external portal.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="green accent-4"
                @click="logout"
              >
                Redirect Me
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import router from '@/router'

export default {
  name: 'HomeView',
  data: () => ({
    valid: false,
    visible: false,
    username: '',
    password: '',
    rules: {
      username: [
        input => !!input || 'You must enter your username',
        input => input.trim().length < 3 || input.trim().length > 10 ? 'You must enter your username' : true
      ],
      password: [
        input => !!input || 'You must enter a valid password',
        input => input.trim().length < 3 ? 'You must enter a valid password' : true
      ]
    }
  }),
  methods: {
    search() {
      this.$refs.form.validate()
      if (this.valid) {
        router.push({ name: 'tracker' })
      }
    },
    login() {
      this.loggedIn = true
      this.$root.signIn('/')
    },
    logout() {
      this.loggedIn = false
      this.$root.signOut('/')
    }
  }
}
</script>
