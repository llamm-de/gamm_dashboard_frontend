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
    <!-- <v-card-text class="mb-5">
      <RegistrationProgress
        :total="this.data.gamm_members_total"
        :percent="this.gamm_members_percent"
        text="gamm members"
      />
      <RegistrationProgress
        :total="this.data.dinner_total"
        :percent="this.dinner_participants_percent"
        text="dinner participants"
      />
      <RegistrationProgress
        :total="this.data.yamm_lunch_total"
        :percent="this.yamm_participants_percent"
        text="yamm lunch participants"
      />
      <RegistrationProgress
        :total="this.data.bus_ticket_total"
        :percent="this.bus_tickets_percent"
        text="bus tickets"
      />
      <RegistrationProgress
        :total="this.data.acc_person_total"
        :percent="this.acc_pers_percent"
        text="accompanying persons"
      />
    </v-card-text> -->
  </v-card>
</template>

<script>
// import RegistrationProgress from "./Registration_progress.vue";
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
