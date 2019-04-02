<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  data() {
    return {
      datacollection: {
        labels: ["McDonalds", "Burger King", "Subway", "KFC"],
        datasets: [
          {
            label: "Marktanteil in %",
            backgroundColor: [
              "#F4BD59",
              "#5CC8F2",
              "#EF7970",
              "#8e5ea2"
            ],
            data: [47, 20, 17, 16]
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        responsive: false,
        maintainAspectRatio: false
      }
    };
  },
  mounted() {
    this.renderChart(this.datacollection, this.options);
  }
};
</script>