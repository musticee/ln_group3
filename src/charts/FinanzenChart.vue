<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: ["dataChartProp", "labelsChartProp", "titleChartProp"],
  computed: {
    chartData: function() {
      return this.dataChartProp;
    },
    chartLabel: function() {
      return this.labelsChartProp;
    },
    chartTitle: function() {
      return this.titleChartProp;
    }
  },
  methods: {
    renderLineChart: function() {
      this.renderChart(this.datacollection, this.options);
    }
  },
  watch: {
    dataChartProp: function() {
      this.datacollection.datasets[0].data = this.chartData;
      this.datacollection.datasets[0].label = this.chartTitle;
      this.datacollection.labels = this.chartLabel;
      // this.datacollection.labels = this.labelsChartProp
      this.renderLineChart();
    } /*,
    labelsChartProp: function() {
      this.options.
    }*/
  },
  data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: ["2017", "2018", "2019"],
        datasets: [
          /*{
            label: "Umsatz in Mio CHF",
            backgroundColor: "#b3c3c2",
            stack: "Stack 0",
            data: [40, 50, 52, 56]
          },*/
          {
            label: "Gewinn in Mio CHF",
            backgroundColor: "#F4BD59",
            stack: "Stack 1",
            data: [8.6, 16.4, 18.5]
          }
        ]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [
            {
              barPercentage: 0.2,
              categoryPercentage: 0.2,
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
              barPercentage: 0.4,
              categoryPercentage: 1,
              gridLines: {
                display: false
              },
              ticks: {
                autoSkip: true
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
    //renderChart function renders the chart with the datacollection and options object.
    this.renderLineChart();
  }
};
</script>