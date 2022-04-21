<template>
  <v-container :v-if="data" class="mb10">
    <v-row>
      <v-col class="col-3 md-12"
        ><RegistrationsCard :data="data.registrations"
      /></v-col>
      <v-col class="col-6 md-12"
        ><ContributionsPerSessionCard
          :data="data.contributions.contributions_per_session"
      /></v-col>
      <v-col class="col-3 md-12"><ContributionsCard :data="data" /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import RegistrationsCard from "../components/Registrations_card.vue";
// import RegistrationsPerDayCard from "../components/RegistrationsPerDay_card.vue";
import ContributionsPerSessionCard from "../components/ContributionsPerSessionCard.vue";
// import TitlesCard from "../components/Titles_card.vue";
import ContributionsCard from "../components/Contributions_card.vue";
export default {
  name: "Dashboard",
  components: {
    RegistrationsCard,
    ContributionsPerSessionCard,
    ContributionsCard,
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
