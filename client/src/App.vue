<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      dark
    >
    <router-link to="/" class="text-decoration-none">  
      <div class="d-flex align-center">
          <v-icon x-large class="ma-3">mdi-badge-account-horizontal</v-icon>
          <h1 class="ma-3 white--text">Employee Tracker</h1>
      </div>
    </router-link>

      <v-spacer></v-spacer>

      <v-btn
        to="/tracker"
        text
        class="mx-2"
      >
        <span class="mx-2">Employees</span>
      </v-btn>
      <v-btn
        to="/about-contact"
        text
        class="mx-2"
      >
        <span class="mx-2">About/Contact</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view :key="$route.fullPath"></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
