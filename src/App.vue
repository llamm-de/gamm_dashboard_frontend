<template>
  <v-app>
    <Navbar />
    <v-main class="grey lighten-2">
      <Dashboard />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Dashboard from "./components/Dashboard";

export default {
  name: "App",

  components: {
    Dashboard,
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
