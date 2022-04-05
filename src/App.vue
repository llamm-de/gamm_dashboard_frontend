<template>
  <v-app>
    <Navbar />
    <v-main class="grey lighten-2">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",

  components: {
    Navbar,
  },
  async mounted() {
    // Fetch api data and store using vuex
    const response = await fetch(process.env.VUE_APP_API_URL);
    const response_data = await response.json();
    this.$store.commit("storeDataFromAPI", response_data.Payload);
  },
};
</script>
