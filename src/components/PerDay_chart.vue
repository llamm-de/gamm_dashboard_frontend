<script>
import { Line, mixins } from "vue-chartjs";

export default {
  extends: Line,
  name: "PerDayChart",
  mixins: [mixins.reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    // console.log(this.options);
    this.renderChart(this.chartData, this.options);
  },
};
</script>
