<template>
  <v-card elevation="2" height="100%" class="mx-auto">
    <v-card-title class="text-h5 font-weight-bold">Titles</v-card-title>
    <v-card-subtitle>Titles of registered participants</v-card-subtitle>
    <chart :option="chartOptions"></chart>
  </v-card>
</template>

<script>
export default {
  name: "Titles",
  props: ["data"],
  data() {
    return {
      chartOptions: null,
      number_of_professors: 0,
      number_of_doctors: 0,
      number_of_other: 0,
    };
  },
  mounted() {
    this.number_of_professors = this.data.Prof;
    this.number_of_doctors = this.data.Dr;
    this.number_of_other = this.data.Ms + this.data.Mr;
    this.chartOptions = {
      color: ["rgba(0,84,159,1)", "rgba(87,171,39,1)", "rgba(204,7,30,1)"],
      legend: {
        orient: "vertical",
        x: "left",
        data: ["professor", "doctor", "other"],
      },
      series: [
        {
          type: "pie",
          data: [
            { name: "professor", value: this.number_of_professors },
            { name: "doctor", value: this.number_of_doctors },
            { name: "other", value: this.number_of_other },
          ],
          radius: ["0%", "90%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          labelLine: {
            show: false,
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
