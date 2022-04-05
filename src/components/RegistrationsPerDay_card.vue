<template>
  <v-card elevation="2" height="100%" class="mx-auto mt-6">
    <v-card-title class="text-h5 font-weight-bold"
      >Registrations per day</v-card-title
    >
    <v-card-subtitle>Number of participants registered per day</v-card-subtitle>
    <!-- <v-card elevation="0" height="80%"> -->
    <chart :option="chartOptions"></chart>
    <!-- </v-card> -->
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
      color: ["rgba(87,171,39,1)"],
      height: "50%",
      width: null,
      xAxis: {
        data: this.data.labels,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          type: "line",
          symbol: "none",
          data: this.data.values,
          lineStyle: {
            normal: {
              width: 3,
            },
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
