<template>
  <v-card elevation="2" height="100%" class="mx-auto mt-6">
    <v-card-title class="text-h5 font-weight-bold">Registrations</v-card-title>
    <v-card-subtitle>Number of participants registered</v-card-subtitle>

    <v-card-text>
      <v-row align="end">
        <v-col class="col-12 pb-0">
          <span class="text-h2 black--text font-weight-medium">
            {{ this.data.registrations_total }}
          </span>
          <span class="text-h6 grey--text text-uppercase">
            total registrations
          </span>
        </v-col>
        <v-col class="col-12 pt-0 mt-0">
          <v-progress-linear
            v-model="registered_percent"
            color="light-blue"
            height="30"
            class="mt-2"
            striped
            ><strong
              >{{ Math.ceil(registered_percent) }}%</strong
            ></v-progress-linear
          >
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text>
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
    </v-card-text>
  </v-card>
</template>

<script>
import RegistrationProgress from "./Registration_progress.vue";
export default {
  name: "RegistrationsCard",
  props: ["data"],
  components: { RegistrationProgress },
  data() {
    return {
      registered_percent: 0,
      gamm_members_percent: 0,
      dinner_participants_percent: 0,
      yamm_participants_percent: 0,
      bus_tickets_percent: 0,
      acc_pers_percent: 0,
    };
  },
  mounted() {
    // Calculate percentages
    this.registered_percent = Math.floor(
      (this.data.registrations_total / 900) * 100
    );
    this.gamm_members_percent = Math.floor(
      (this.data.gamm_members_total / this.data.registrations_total) * 100
    );
    this.dinner_participants_percent = Math.floor(
      (this.data.dinner_total / this.data.registrations_total) * 100
    );
    this.yamm_participants_percent = Math.floor(
      (this.data.yamm_lunch_total / this.data.registrations_total) * 100
    );
    this.bus_tickets_percent = Math.floor(
      (this.data.bus_ticket_total / this.data.registrations_total) * 100
    );
    this.acc_pers_percent = Math.floor(
      (this.data.acc_person_total / this.data.registrations_total) * 100
    );
  },
};
</script>

<style scoped>
</style>
