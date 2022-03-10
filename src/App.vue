<template>
  <v-app>
    <v-main>
      <Navbar />
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
