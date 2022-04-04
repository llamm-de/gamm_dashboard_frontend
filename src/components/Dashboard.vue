<template>
  <v-container v-if="data"> </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  components: {},

  data() {
    return {
      data: null,
    };
  },
  async mounted() {
    // Fetch data from api
    const response = await fetch(process.env.VUE_APP_API_URL);
    const response_data = await response.json();
    this.data = response_data.Payload;
  },
};
</script>

<style>
</style>
