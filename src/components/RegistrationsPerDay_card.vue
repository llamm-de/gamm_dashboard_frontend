<template>
  <v-card elevation="2" height="100%">
    <v-card-title class="text-h5 font-weight-bold"
      >Registrations per day</v-card-title
    >
    <v-card-subtitle>Number of participants registered per day</v-card-subtitle>
    <PerDayChart :chartData="chartdata" :options="chartoptions" />
  </v-card>
</template>

<script>
import PerDayChart from "./PerDay_chart.vue";
export default {
  name: "RegistrationsPerDayCard",
  components: {
    PerDayChart,
  },
  props: ["data"],
  data() {
    return {
      chartdata: {
        labels: this.data.registrations_per_day.labels,
        datasets: [
          {
            label: "",
            data: this.data.registrations_per_day.values,
            fill: true,
            backgroundColor: "rgba(56, 142, 60, 0.1)",
            borderColor: "rgba(56, 142, 60, 1)",
            pointBorderWidth: 0,
            tension: 0,
          },
        ],
      },
      chartoptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: false },
        tooltips: { enable: false },
      },
    };
  },
};
</script>

<style scoped>
</style>
