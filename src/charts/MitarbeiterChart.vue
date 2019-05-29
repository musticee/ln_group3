<script>
	import {Line} from "vue-chartjs";

	export default {
  extends: Line,
  props: ["maChartProp", "labelsChartProp"],
  computed: {
    chartData: function() {
      return this.maChartProp;
    },
    labelChartData: function() {
      return this.labelsChartProp;
    }
  },
  methods: {
    renderLineChart: function() {
      this.renderChart(this.datacollection, this.options);
    }
  },
  watch: {
    maChartProp: function() {
      this.datacollection.datasets[0].data = this.chartData;
      this.datacollection.labels = this.labelsChartProp;
      this.renderLineChart();
    }
  },

  data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: [],
        datasets: [
          {
            lineTension: 0,
            data: [],
            label: "Fluktuation in Prozent",
            borderColor: "#F4BD59",
            fill: false
          }
        ]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: true
        },
        responsive: false,
        maintainAspectRatio: false
      }
    };
  },
  mounted() {
    this.renderLineChart();
  }
};
</script>