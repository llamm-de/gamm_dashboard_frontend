<template>
  <v-card v-if="this.data" elevation="2" height="600" class="mx-auto my-auto">
    <v-card-title class="text-h5 font-weight-bold">
      Registrations per day
    </v-card-title>
    <v-card-subtitle>Number of participants registered per day</v-card-subtitle>
    <chart
      :option="chartOptions"
      :init-options="initOptions"
      autoresize
    ></chart>
  </v-card>
</template>

<script>
export default {
  name: "RegistrationsPerDayCard",
  components: {},
  props: ["data"],
  data() {
    return {
      chartOptions: null,
      initOptions: {
        renderer: "canvas",
      },
    };
  },
  mounted() {
    this.chartOptions = {
      height: "100%",
      width: "50%",
      xAxis: {
        data: this.data.labels,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          type: "line",
          data: this.data.values,
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
