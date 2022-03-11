<template>
  <v-card elevation="2" height="100%">
    <v-card-title class="text-h5 font-weight-bold">Deadlines</v-card-title>
    <v-card-subtitle>Days until individual deadlines</v-card-subtitle>
    <v-row>
      <v-col class="col-3">
        <div class="pl-10 pb-5">
          <v-sheet
            class="px-5 py-2"
            color="rgba(100, 221, 23, 0.75)"
            :rounded="true"
            elevation="0"
          >
            <div class="text-h6 font-weight-bold pb-2">
              Conference starts in
            </div>
            <div class="text-center">
              <span class="text-h4">{{ days_to_conference }}</span>
              <span class="text-caption"> Days </span>
              <span class="text-h4">{{ hours_to_conference }}</span>
              <span class="text-caption"> Hours </span>
              <span class="text-h4">{{ minutes_to_conference }}</span>
              <span class="text-caption"> Min. </span>
              <span class="text-h4">{{ seconds_to_conference }} </span>
              <span class="text-caption"> Sec. </span>
            </div>
          </v-sheet>
        </div>
      </v-col>
      <v-col class="col-3">
        <div class="pb-5">
          <v-sheet
            class="px-5 py-2"
            color="rgba(185, 246, 202, 0.5)"
            :rounded="true"
            elevation="0"
          >
          </v-sheet>
        </div>
      </v-col>
      <v-col class="col-3">
        <div class="pb-5">
          <v-sheet
            class="px-5 py-2"
            color="rgba(185, 246, 202, 0.5)"
            :rounded="true"
            elevation="0"
          >
          </v-sheet>
        </div>
      </v-col>
      <v-col class="col-3">
        <div class="pb-5 pr-10">
          <v-sheet
            class="px-5 py-2"
            color="rgba(185, 246, 202, 0.5)"
            :rounded="true"
            elevation="0"
          >
          </v-sheet>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "DeadlinesCard",
  props: ["data"],
  data() {
    return {
      days_to_conference: 0,
      hours_to_conference: 0,
      minutes_to_conference: 0,
      seconds_to_conference: 0,
      days_to_registration_deadline: 0,
      days_to_abstract_deadline: 0,
      days_to_early_bird_deadline: 0,
    };
  },
  mounted() {
    // conference start countdown
    this.countdown();

    // registration deadline
    this.days_to_registration_deadline = this.days_until_deadline(
      this.data.registration_deadline
    );

    // abstract deadline
    this.days_to_abstract_deadline = this.days_until_deadline(
      this.data.abstract_deadline
    );

    // early_bird deadline
    this.days_to_early_bird_deadline = this.days_until_deadline(
      this.data.early_bird_deadline
    );
  },
  computed: {
    _denominator_seconds: () => 1000,
    _denominator_minutes() {
      return this._denominator_seconds * 60;
    },
    _denominator_hours() {
      return this._denominator_minutes * 60;
    },
    _denominator_days() {
      return this._denominator_hours * 24;
    },
    _end() {
      return new Date(this.data.conference_start);
    },
  },
  methods: {
    // calculate countdown
    countdown() {
      const timer = setInterval(() => {
        const now = new Date();
        const difference = this._end.getTime() - now.getTime();

        if (difference < 0) {
          clearInterval(timer);
          return;
        }

        const [days, hours, minutes, seconds] =
          this.millisec_to_d_h_min_sec(difference);

        this.days_to_conference = this.formatNumbering(days);
        this.hours_to_conference = this.formatNumbering(hours);
        this.minutes_to_conference = this.formatNumbering(minutes);
        this.seconds_to_conference = this.formatNumbering(seconds);
      }, 1000);
    },

    // Format numbering#
    formatNumbering: (number) => (number < 10 ? "0" + number : number),

    // Calculated duration in days, hours, minutes & seconds from milliseconds
    millisec_to_d_h_min_sec: function (milliseconds) {
      const days = Math.floor(milliseconds / this._denominator_days);
      const hours =
        Math.floor(
          (milliseconds % this._denominator_days) / this._denominator_hours
        ) + 1;
      const minutes = Math.floor(
        (milliseconds % this._denominator_hours) / this._denominator_minutes
      );
      const seconds = Math.floor(
        (milliseconds % this._denominator_minutes) / this._denominator_seconds
      );

      return [days, hours, minutes, seconds];
    },

    // Calculate days until deadline
    days_until_deadline: function (unixTimestamp) {
      const now = new Date();
      const end = new Date(unixTimestamp);
      const difference = end - now;
      return Math.floor(difference / this._denominator_days);
    },
  },
};
</script>