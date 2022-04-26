<template>
  <v-container :v-if="data" class="mb10">
    <v-row>
      <v-col class="col-lg-6 col-md-12 col-sm-12 col-xs-12"
        ><GeneralDataCard :data="data"
      /></v-col>
      <v-col class="col-lg-6 col-md-12 col-sm-12 col-xs-12"
        ><ContributionsPerSessionCard
          :data="data.contributions.contributions_per_session"
      /></v-col>
    </v-row>
    <!-- <v-row>
      <v-col class="col-12">
        <RegistrationsPerDayCard
          :data="data.registrations.registrations_per_day"
        />
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
import ContributionsPerSessionCard from "../components/ContributionsPerSessionCard.vue";
import GeneralDataCard from "../components/GeneralData_card.vue";
// import RegistrationsPerDayCard from "../components/RegistrationsPerDay_card.vue";
export default {
  name: "Dashboard",
  components: {
    ContributionsPerSessionCard,
    GeneralDataCard,
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
