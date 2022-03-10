<template>
  <v-container> {{ data }}</v-container>
</template>

<script>
export default {
  name: "Dashboard",

  data() {
    return {
      data: null,
    };
  },
  async mounted() {
    const api_url = "http://127.0.0.1:5000/data";
    const response = await fetch(api_url);
    const response_data = await response.json();
    this.data = response_data.Payload;
  },
};
</script>
