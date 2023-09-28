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
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
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
              color="success"
              class="mr-4"
              @click="search"
            >
              Submit
            </v-btn>
          </v-form>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
          input => input.trim().length < 3 ? 'You must enter your username' : true
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
        console.log(this.username)
        console.log(this.password)
      }
    }
  }
</script>
