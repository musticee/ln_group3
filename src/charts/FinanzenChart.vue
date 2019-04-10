<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: ["dataChartProp"],
  computed: {
    chartData: function() {
      return this.dataChartProp;
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
      console.log("data " + this.datacollection);
      console.log("options " + this.options);
      //this.renderChart(this.data, this.options);
      this.renderLineChart();
    }
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