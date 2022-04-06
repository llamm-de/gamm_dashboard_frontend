<template>
  <v-card elevation="2" height="100%" class="mx-auto">
    <v-card-title class="text-h5 font-weight-bold"
      >Academic Titles</v-card-title
    >
    <v-card-subtitle
      >Academic Titles of registered participants</v-card-subtitle
    >
    <!-- <v-card-text heigth="100%"> -->
    <chart :option="chartOptions"></chart>
    <!-- </v-card-text> -->
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
      color: ["#EF5350", "#29B6F6", "#FFCA28"],
      width: "100%",
      legend: {
        orient: "horizontal",
        y: "bottom",
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
          radius: ["30%", "80%"],
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
