<template>
  <v-card elevation="2" height="100%">
    <v-card-title class="text-h5 font-weight-bold"
      >Registrations per day</v-card-title
    >
    <v-card-subtitle>Number of participants registered per day</v-card-subtitle>
    <chart :option="chartOptions"></chart>
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
    };
  },
  mounted() {
    this.chartOptions = {
      height: null,
      width: null,
      xAxis: {
        data: this.data.labels,
      },
      yAxis: {
        type: "value",
      },
      tooltip: {
        show: true,
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
