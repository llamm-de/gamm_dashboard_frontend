<template>
  <v-card elevation="2" max-width="400">
    <div class="text-center">
      <v-card-title class="text-h5 font-weight-bold">Participants</v-card-title>
      <v-progress-circular
        :rotate="270"
        :size="350"
        :width="70"
        :value="data.participant_progress"
        color="primary"
        class="ma-5"
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
.v-progress-circular {
  padding: 0rem;
}
</style>
