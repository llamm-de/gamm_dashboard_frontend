<template>
  <v-card elevation="2" height="100%" class="mx-auto my-auto">
    <v-card-title class="text-h5 font-weight-bold"
      >Contributions per session</v-card-title
    >
    <v-card-subtitle
      >Number of contributions submitted per session</v-card-subtitle
    >
    <v-card-text>
      <v-row>
        <v-col class="col-12">
          <v-data-table
            :headers="headers"
            :items="items"
            :items-per-page="6"
            class="elevation-1"
          ></v-data-table>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ContributionsPerSessionCard",
  components: {},
  props: ["data"],
  data() {
    return {
      headers: [
        { text: "Session", align: "start", sortable: true, value: "session" },
        {
          text: "Contributions",
          align: "start",
          sortable: true,
          value: "contributions",
        },
      ],
    };
  },
  computed: {
    items() {
      var tmp = [];
      for (var i = 0; i < this.data.values.length; i++) {
        var item = {
          session: this.data.labels[i],
          contributions: this.data.values[i],
        };
        tmp.push(item);
      }
      return tmp;
    },
  },
  mounted() {},
};
</script>

<style scoped>
</style>
