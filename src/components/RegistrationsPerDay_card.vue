<template>
  <v-card elevation="2" height="100%" class="mx-auto my-auto">
    <v-card-title class="text-h5 font-weight-bold"
      >Registrations per day</v-card-title
    >
    <v-card-subtitle>Number of participants registered per day</v-card-subtitle>
    <v-card-text>
      <v-row
        ><v-col class="col-12">
          <v-sheet
            color="blue lighten-5"
            max-width="calc(100% - 32px)"
            class="v-sheet--offset mx-auto mt-15"
            rounded
            elevation="1"
          >
            <v-sparkline
              :value="data.values"
              :labels="labels"
              color="purple lighten-1"
              line-width="2"
              height="120"
              stroke-linecap="round"
              smooth="4"
              padding="15"
            ></v-sparkline>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "RegistrationsPerDayCard",
  components: {},
  props: ["data"],
  computed: {
    labels() {
      var tmp = [];
      var label;
      for (label of this.data.labels) {
        var split = label.split(".");
        var date = split[0] + "." + split[1] + ".";
        if (split[0] === "01") {
          tmp.push(date);
        } else if (label === "07.02.2022") {
          tmp.push(date);
        } else {
          tmp.push(" ");
        }
      }
      return tmp;
    },
  },
  mounted() {},
};
</script>

<style scoped>
</style>
