<template>
  <v-container>
    <v-row class="my-5">
      <v-col
        class="ma-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Login
        </h2>

        <v-row class="ma-5">
          <v-card
          elevation="2"
          width="90%"
          >
            <v-form
            ref="form"
            v-model="valid"
            class="ma-5 pa-5"
            @submit.prevent="login"
            >
              <v-text-field
                v-model="username"
                :counter="10"
                :rules="rules.username"
                label="Username"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="rules.password"
                :type="visible ? 'text' : 'password'"
                label="Password"
                hint="At least 3 characters"
                counter
                @click:append="visible = !visible"
                required
              ></v-text-field>

              <v-btn
                :disabled="!valid"
                type="submit"
                color="success"
                class="mr-4"
              >
                Submit
              </v-btn>
              <v-btn
                :disabled="!loggedIn"
                type="submit"
                color="success"
                class="mr-4"
                @click="logout"
              >
                Logout
              </v-btn>
            </v-form>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import router from '@/router'


export default {
  name: 'HomeView',
  data: () => ({
    valid: false,
    loggedIn: false,
    visible: false,
    username: '',
    password: '',
    rules: {
      username: [
        input => !!input || 'You must enter your username',
        input => input.trim().length < 3 ? 'You must enter your username' : true
      ],
      password: [
        input => !!input || 'You must enter a valid password',
        input => input.trim().length < 3 ? 'You must enter a valid password' : true
      ]
    }
  }),
  methods: {
    login() {
      this.$refs.form.validate()
      if (this.valid) {
        this.loggedIn = true
        // router.push({ name: 'tracker' })
      }
    },
    logout() {
      this.loggedIn = false
    }
  }
}
</script>
