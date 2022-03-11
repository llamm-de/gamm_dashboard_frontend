<template>
  <v-card elevation="2" height="100%">
    <v-card-title class="text-h5 font-weight-bold">Participants</v-card-title>
    <v-card-subtitle>Number of participants registered</v-card-subtitle>
    <div class="text-center">
      <v-progress-circular
        :rotate="270"
        :size="350"
        :width="70"
        :value="data.participant_progress"
        color="primary"
        class="ma-10"
      >
        <div class="text-h3 text-uppercase font-weight-bold">
          {{ data.registrations_total }}
        </div>
        <div class="text-caption grey--text text-uppercase">
          / {{ data.participants_goal }}
        </div>
      </v-progress-circular>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "RegistrationsCard",
  props: ["data"],
};
</script>

<style scoped>
</style>
