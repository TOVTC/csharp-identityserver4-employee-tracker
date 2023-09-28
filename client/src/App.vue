<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      dark
    >
      <div class="d-flex align-center">
        <v-icon x-large class="ma-3">mdi-badge-account-horizontal</v-icon>
        <h1 class="ma-3">Employee Tracker</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HomeView />
    </v-main>
  </v-app>
</template>

<script>
import HomeView from './views/HomeView.vue';

export default {
  name: 'App',

  components: {
    HomeView
},

  data: () => ({
    //
  }),
};
</script>
