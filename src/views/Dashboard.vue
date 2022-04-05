<template>
  <v-container>
    <v-row>
      <v-col class="col-3"
        ><RegistrationsCard :data="data.registrations"
      /></v-col>
      <v-col class="col-9"
        ><RegistrationsPerDayCard
          :data="data.registrations.registrations_per_day"
      /></v-col>
      <!-- <v-col class="col-3"
        ><TitlesCard :data="data.participants.participant_titles"
      /></v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import RegistrationsPerDayCard from "../components/RegistrationsPerDay_card.vue";
import RegistrationsCard from "../components/Registrations_card.vue";
// import TitlesCard from "./Titles_card.vue";
export default {
  name: "Dashboard",
  components: { RegistrationsCard, RegistrationsPerDayCard },
  computed: {
    data() {
      return this.$store.getters.getData;
    },
  },
};
</script>

<style>
</style>
