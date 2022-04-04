<template>
  <v-container v-if="data">
    <v-row>
      <v-col class="col-3"
        ><RegistrationsPerDayCard
          :data="data.registrations.registrations_per_day"
      /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import RegistrationsPerDayCard from "./RegistrationsPerDay_card.vue";
export default {
  name: "Dashboard",
  components: { RegistrationsPerDayCard },

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
