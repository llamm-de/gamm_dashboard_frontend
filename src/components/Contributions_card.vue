<template>
  <v-card elevation="2" height="100%" class="mx-auto my-auto">
    <v-card-title class="text-h5 font-weight-bold">Contributions</v-card-title>
    <v-card-subtitle>Number of contributions received</v-card-subtitle>

    <v-card-text>
      <v-row align="end">
        <v-col class="col-12 pb-0">
          <span class="text-h2 black--text font-weight-medium">
            {{ this.data.contributions.contributions_total }}
          </span>
          <span class="text-h6 grey--text text-uppercase">
            total contributions
          </span>
        </v-col>
        <v-col class="col-12 pt-0 mt-0">
          <v-progress-linear
            v-model="contributions_percent"
            color="light-green"
            height="30"
            class="mt-2"
            striped
            ><strong
              >{{ Math.ceil(contributions_percent) }}%</strong
            ></v-progress-linear
          >
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-title class="text-h5 font-weight-bold">Users</v-card-title>
    <v-card-subtitle>Number of users registered</v-card-subtitle>
    <v-card-text>
      <v-row align="end">
        <v-col class="col-12 pb-0">
          <span class="text-h2 black--text font-weight-medium">
            {{ this.data.users.users_total }}
          </span>
          <span class="text-h6 grey--text text-uppercase"> total users </span>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
export default {
  name: "ContributionsCard",
  props: ["data"],
  //   components: { RegistrationProgress },
  data() {
    return {
      contributions_percent: 0,
    };
  },
  mounted() {
    console.log(this.data);
    // Calculate percentages
    this.contributions_percent = Math.floor(
      (this.data.contributions.contributions_total /
        this.data.registrations.registrations_total) *
        100
    );
  },
};
</script>

<style scoped>
</style>
