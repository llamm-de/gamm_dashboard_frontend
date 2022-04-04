<template>
  <v-card elevation="2" height="100%">
    <v-card-title class="text-h5 font-weight-bold">Registrations</v-card-title>
    <v-card-subtitle>Number of participants registered</v-card-subtitle>
    <div class="inner_grid">
      <v-container>
        <v-row dense>
          <v-col md="6"><chart :option="chartOptions"></chart></v-col>
          <v-col md="6">
            {{ this.data.registrations_total }} total registrations<br />
            <v-divider></v-divider>
            {{ this.data.gamm_members_total }} ({{
              this.gamm_members_percent
            }}%) GAMM members
            <br />
            {{ this.data.dinner_total }} ({{
              this.dinner_participants_percent
            }}%) Dinner reservations
            <br />
            {{ this.data.yamm_lunch_total }} ({{
              this.yamm_participants_percent
            }}%) YAMM lunch registrations<br />
            {{ this.data.bus_ticket_total }} ({{ this.bus_tickets_percent }}%)
            Bus tickets
            <br />
            {{ this.data.acc_person_total }} ({{ this.acc_pers_percent }}%)
            Accompanying persons<br />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "RegistrationsCard",
  props: ["data"],
  data() {
    return {
      gamm_members_percent: 0,
      dinner_participants_percent: 0,
      yamm_participants_percent: 0,
      bus_tickets_percent: 0,
      acc_pers_percent: 0,
      chartOptions: null,
    };
  },
  mounted() {
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

    this.chartOptions = {
      color: ["rgba(0,84,159,1)", "rgba(142,186,229,1)"],
      title: {
        // text: "A Case of Doughnut Chart",
        left: "center",
        top: "center",
      },
      series: [
        {
          type: "pie",
          data: [
            { name: "registered", value: this.data.registrations_total },
            { name: "goal", value: 850 - this.data.registrations_total },
          ],
          radius: ["60%", "90%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
            emphasis: {
              show: true,
            },
          },
          labelLine: {
            show: false,
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "30",
              fontWeight: "bold",
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
