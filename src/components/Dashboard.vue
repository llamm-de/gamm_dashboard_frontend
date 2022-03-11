<template>
  <v-container v-if="data">
    <v-row
      ><v-col class="col-12"><DeadlinesCard :data="data" /></v-col
    ></v-row>
    <v-row>
      <v-col class="col-3"><RegistrationsCard :data="data" /></v-col>
      <v-col class="col-9"><RegistrationsPerDayCard :data="data" /></v-col>
    </v-row>
    <v-row>
      <!-- <v-col class="col-12"><RegistrationsPerDayCard :data="data" /></v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import RegistrationsCard from "./Registrations_card.vue";
import DeadlinesCard from "./Deadlines_card.vue";
import RegistrationsPerDayCard from "./RegistrationsPerDay_card.vue";
export default {
  name: "Dashboard",
  components: {
    RegistrationsCard,
    DeadlinesCard,
    RegistrationsPerDayCard,
  },

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

    // Calculate progress of participant registrations
    this.data.participant_progress =
      (response_data.Payload.registrations_total /
        response_data.Payload.participants_goal) *
      100;
  },
};
</script>

<style>
</style>
