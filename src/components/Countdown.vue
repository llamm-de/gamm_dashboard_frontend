<template>
  <v-sheet color="amber lighten-3 ma-2 pa-2">
    <div class="text-subtitle-2 text-uppercase">Conference starts</div>
    <div class="text-center">
      <span class="text-h5">{{ days_left }}</span>
      <span class="text-caption"> D. </span>
      <span class="text-h5">{{ hours_left }}</span>
      <span class="text-caption"> H. </span>
      <span class="text-h5">{{ minutes_left }}</span>
      <span class="text-caption"> M. </span>
      <span class="text-h5">{{ seconds_left }} </span>
      <span class="text-caption"> S. </span>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "Countdown",
  data() {
    return {
      days_left: 0,
      hours_left: 0,
      minutes_left: 0,
      seconds_left: 0,
    };
  },
  mounted() {
    // conference start countdown
    this.countdown();
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
      return new Date("2022-08-15T12:00:00.000");
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

        this.days_left = this.formatNumbering(days);
        this.hours_left = this.formatNumbering(hours);
        this.minutes_left = this.formatNumbering(minutes);
        this.seconds_left = this.formatNumbering(seconds);
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
  },
};
</script>