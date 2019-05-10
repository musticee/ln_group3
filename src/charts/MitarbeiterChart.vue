<script>
import { Line } from "vue-chartjs";
import ChartAnnotationsPlugin from "chartjs-plugin-annotation";

Chart.plugins.register(ChartAnnotationsPlugin);

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
      this.addPlugin(this.forecast);
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
        labels: ["2017", "2018", "2019"],
        datasets: [
          {
            lineTension: 0,
            data: [6, 12, 17],
            label: "Fluktuation in Prozent",
            borderColor: "#F4BD59",
            fill: false
          }
        ]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        annotation: {
          annotations: [
            {
              type: "line",
              mode: "vertical",
              scaleID: "x-axis-0",
              borderWidth: "2",
              // example: value "2019/1/23" ability to match in the x-axis collection
              value: "2019",
              // value: 'Wed Jan 23 2019 10:31:27 GMT-0500 (Eastern Standard Time)',
              borderColor: "#EF7970",
              label: {
                content: "TODAY",
                enabled: false,
                position: "top"
              }
            }
          ]
        },
        scales: {
          yAxes: [
            {
              ticks: {
                max: 40,
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
      },
      forecast: {
        id: "horizontalLine",
        afterDraw: function(chart) {
          if (typeof chart.config.options.lineAt != "undefined") {
            var lineAt = chart.config.options.lineAt;
            var ctxPlugin = chart.chart.ctx;
            var xAxe = chart.scales[chart.config.options.scales.xAxes[0].id];
            var yAxe = chart.scales[chart.config.options.scales.yAxes[0].id];

            // I'm not good at maths
            // So I couldn't find a way to make it work ...
            // ... without having the `min` property set to 0
            if (yAxe.min != 0) return;

            ctxPlugin.strokeStyle = "red";
            ctxPlugin.beginPath();
            lineAt = (lineAt - yAxe.min) * (100 / yAxe.max);
            lineAt = ((100 - lineAt) / 100) * yAxe.height + yAxe.top;
            ctxPlugin.moveTo(xAxe.left, lineAt);
            ctxPlugin.lineTo(xAxe.right, lineAt);
            ctxPlugin.stroke();
          }
        }
      }
    };
  },
  mounted() {
    this.renderLineChart();
  }
};
</script>