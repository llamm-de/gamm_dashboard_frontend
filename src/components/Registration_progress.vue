<template>
  <v-row align="end" class="py-0">
    <v-col class="col-2 mb-0 pb-0">
      <div class="text-h5 black--text font-weight-medium">
        {{ total }}
      </div>
    </v-col>
    <v-col class="col-10 mb-0 pb-0">
      <div class="text-uppercase">{{ text }}</div>
    </v-col>
    <v-col class="col-12 py-0">
      <v-progress-linear v-model="percent" color="teal lighten-3" height="20"
        ><strong>{{ Math.ceil(percent) }}%</strong></v-progress-linear
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "RegistrationsProgress",
  props: ["total", "percent", "text"],
};
</script>

<style scoped>
</style>
