<template>
  <v-card elevation="2" height="100%" class="mx-auto my-auto">
    <v-card-title class="text-h5 font-weight-bold">General Data</v-card-title>
    <v-card-subtitle
      >Some numbers on registrations and contribution
      submissions</v-card-subtitle
    >
    <v-divider></v-divider>
    <v-row>
      <v-col class="col-md-6 col-sm-12">
        <v-card elevation="0">
          <v-card-text>
            <v-row align="end">
              <v-col class="col-12 pb-0">
                <span class="text-h2 black--text font-weight-medium">
                  {{ this.data.users.users_total }}
                </span>
                <span class="text-h6 grey--text text-uppercase">
                  ConfTool users
                </span>
              </v-col>
              <v-col class="col-12 pt-0 mt-0">
                <v-progress-linear
                  v-model="users_percent"
                  color="red"
                  height="30"
                  class="mt-2"
                  striped
                  ><strong>{{ users_percent }}%</strong></v-progress-linear
                >
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <v-row align="end">
              <v-col class="col-12 pb-0">
                <span class="text-h2 black--text font-weight-medium">
                  {{ this.data.registrations.registrations_total }}
                </span>
                <span class="text-h6 grey--text text-uppercase">
                  registrations
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
            <v-row align="end">
              <v-col class="col-12 pb-0">
                <span class="text-h2 black--text font-weight-medium">
                  {{ this.data.contributions.contributions_total }}
                </span>
                <span class="text-h6 grey--text text-uppercase">
                  contributions
                </span>
              </v-col>
              <v-col class="col-12 pt-0 mt-0">
                <v-progress-linear
                  v-model="contributions_percent"
                  color="light-green"
                  height="30"
                  class="mt-2"
                  striped
                  ><strong>{{ Math.ceil(contributions_percent) }}%</strong>
                </v-progress-linear>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="col-md-6 col-sm-12">
        <v-card elevation="0">
          <v-card-title class="text-h5 font-weight-bold"
            >Registrations by category</v-card-title
          >
          <v-card-text class="mb-5">
            <RegistrationProgress
              :total="this.data.registrations.gamm_members_total"
              :percent="this.gamm_members_percent"
              text="gamm members"
            />
            <RegistrationProgress
              :total="this.data.registrations.dinner_total"
              :percent="this.dinner_participants_percent"
              text="dinner participants"
            />
            <RegistrationProgress
              :total="this.data.registrations.yamm_lunch_total"
              :percent="this.yamm_participants_percent"
              text="yamm lunch participants"
            />
            <RegistrationProgress
              :total="this.data.registrations.bus_ticket_total"
              :percent="this.bus_tickets_percent"
              text="bus tickets"
            />
            <RegistrationProgress
              :total="this.data.registrations.acc_person_total"
              :percent="this.acc_pers_percent"
              text="accompanying persons"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import RegistrationProgress from "./Registration_progress.vue";
export default {
  name: "GeneralDataCard",
  props: ["data"],
  components: { RegistrationProgress },
  data() {
    return {
      users_percent: 0,
      registered_percent: 0,
      contributions_percent: 0,
      gamm_members_percent: 0,
      dinner_participants_percent: 0,
      yamm_participants_percent: 0,
      bus_tickets_percent: 0,
      acc_pers_percent: 0,
    };
  },
  mounted() {
    // Calculate percentages
    this.users_percent = Math.floor((this.data.users.users_total / 900) * 100);
    this.registered_percent = Math.floor(
      (this.data.registrations.registrations_total /
        this.data.users.users_total) *
        100
    );
    this.contributions_percent = Math.floor(
      (this.data.contributions.contributions_total /
        this.data.users.users_total) *
        100
    );

    this.gamm_members_percent = Math.floor(
      (this.data.registrations.gamm_members_total /
        this.data.registrations.registrations_total) *
        100
    );
    this.dinner_participants_percent = Math.floor(
      (this.data.registrations.dinner_total /
        this.data.registrations.registrations_total) *
        100
    );
    this.yamm_participants_percent = Math.floor(
      (this.data.registrations.yamm_lunch_total /
        this.data.registrations.registrations_total) *
        100
    );
    this.bus_tickets_percent = Math.floor(
      (this.data.registrations.bus_ticket_total /
        this.data.registrations.registrations_total) *
        100
    );
    this.acc_pers_percent = Math.floor(
      (this.data.registrations.acc_person_total /
        this.data.registrations.registrations_total) *
        100
    );
  },
};
</script>

<style scoped>
</style>
