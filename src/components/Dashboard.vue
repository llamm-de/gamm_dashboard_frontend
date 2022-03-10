<template>
  <v-container>
    <RegistrationsCard v-if="data" :data="data" />
  </v-container>
</template>

<script>
import RegistrationsCard from "./Registrations_card.vue";
export default {
  name: "Dashboard",
  components: {
    RegistrationsCard,
  },

  data() {
    return {
      data: null,
    };
  },
  async mounted() {
    // Fetch data from api
    const api_url = "http://127.0.0.1:5000/data";
    const response = await fetch(api_url);
    const response_data = await response.json();
    this.data = response_data.Payload;

    // Calculate progress of participant registrations
    this.data.participant_progress =
      (response_data.Payload.registrations_total /
        response_data.Payload.participants_goal) *
      100;

    console.log(this.data);
  },
};
</script>

<style>
</style>
