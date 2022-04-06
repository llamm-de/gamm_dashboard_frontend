<template>
  <v-container :v-if="data" class="mb10">
    <v-row>
      <v-col class="col-3"
        ><RegistrationsCard :data="data.registrations"
      /></v-col>
      <v-col class="col-6"
        ><RegistrationsPerDayCard
          :data="data.registrations.registrations_per_day"
      /></v-col>
      <v-col class="col-3"
        ><TitlesCard :data="data.participants.participant_titles"
      /></v-col>
    </v-row>
    <v-row>
      <v-col class="col-6"></v-col>
      <v-col class="col-6"
        ><ContributionsPerSessionCard
          :data="data.contributions.contributions_per_session"
      /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import RegistrationsCard from "../components/Registrations_card.vue";
import RegistrationsPerDayCard from "../components/RegistrationsPerDay_card.vue";
import ContributionsPerSessionCard from "../components/ContributionsPerSessionCard.vue";
import TitlesCard from "../components/Titles_card.vue";
export default {
  name: "Dashboard",
  components: {
    RegistrationsCard,
    RegistrationsPerDayCard,
    ContributionsPerSessionCard,
    TitlesCard,
  },
  computed: {
    data() {
      return this.$store.getters.getData;
    },
  },
};
</script>

<style>
</style>
