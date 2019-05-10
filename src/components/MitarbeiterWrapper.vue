<template>
  <div id="mitarbeiter">
    <div class="row">
      <div class="col-5">
        <MitarbeiterChart v-bind:maChartProp="dataChart" v-bind:labelsChartProp="labels" :width="360" :height="220"/>
      </div>
    </div>

    <div class="row">
      <div class="col-md-5">
        <select @change="updateDataFilter($event)" class="custom-select" id="inputGroupSelect03">
          <option value="y" selected>Pro Jahr</option>
          <option value="m">Pro Monat</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import MitarbeiterChart from "../charts/MitarbeiterChart";
export default {
  name: "mitarbeiter",
  components: {
    MitarbeiterChart
  },
  data() {
    return {
      apidata: {
        "2016": [
          { monat: 1, anzahl: 4, verlassene: 0 },
          { monat: 2, anzahl: 4, verlassene: 0 },
          { monat: 3, anzahl: 4, verlassene: 0 },
          { monat: 4, anzahl: 4, verlassene: 0 },
          { monat: 5, anzahl: 4, verlassene: 0 },
          { monat: 6, anzahl: 4, verlassene: 0 },
          { monat: 7, anzahl: 4, verlassene: 0 },
          { monat: 8, anzahl: 4, verlassene: 0 },
          { monat: 9, anzahl: 4, verlassene: 0 },
          { monat: 10, anzahl: 4, verlassene: 0 },
          { monat: 11, anzahl: 4, verlassene: 0 },
          { monat: 12, anzahl: 4, verlassene: 0 }
        ],
        "2017": [
          { monat: 1, anzahl: 4, verlassene: 0 },
          { monat: 2, anzahl: 4, verlassene: 0 },
          { monat: 3, anzahl: 4, verlassene: 0 },
          { monat: 4, anzahl: 4, verlassene: 0 },
          { monat: 5, anzahl: 4, verlassene: 0 },
          { monat: 6, anzahl: 4, verlassene: 0 },
          { monat: 7, anzahl: 4, verlassene: 0 },
          { monat: 8, anzahl: 4, verlassene: 0 },
          { monat: 9, anzahl: 4, verlassene: 0 },
          { monat: 10, anzahl: 4, verlassene: 0 },
          { monat: 11, anzahl: 4, verlassene: 0 },
          { monat: 12, anzahl: 4, verlassene: 1 }
        ],
        "2018": [
          { monat: 1, anzahl: 3, verlassene: 0 },
          { monat: 2, anzahl: 3, verlassene: 0 },
          { monat: 3, anzahl: 3, verlassene: 0 },
          { monat: 4, anzahl: 3, verlassene: 0 },
          { monat: 5, anzahl: 3, verlassene: 0 },
          { monat: 6, anzahl: 3, verlassene: 0 },
          { monat: 7, anzahl: 3, verlassene: 0 },
          { monat: 8, anzahl: 3, verlassene: 0 },
          { monat: 9, anzahl: 3, verlassene: 0 },
          { monat: 10, anzahl: 3, verlassene: 0 },
          { monat: 11, anzahl: 3, verlassene: 0 },
          { monat: 12, anzahl: 3, verlassene: 0 }
        ],
        "2019": [
          { monat: 1, anzahl: 3, verlassene: 0 },
          { monat: 2, anzahl: 3, verlassene: 0 },
          { monat: 3, anzahl: 3, verlassene: 1 },
          { monat: 4, anzahl: 2, verlassene: 0 },
          { monat: 5, anzahl: 2, verlassene: 0 }
        ]
      },
      dataChart: [1, 2, 3],
      labels: ["label 1"],
      filters: [
        {
          select: "y"
        }
      ],
      monthMap: {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "Mai",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Okt",
        11: "Nov",
        12: "Dez"
      }
    };
  },
  methods: {
    updateDataFilter: function() {
      this.filters.select = event.target.value;
      this.updateChart();
    },
    updateChart: function() {
      // jahr
      if (this.filters.select == "y") {
        var labels = [];
        var fluktuation = [];
        for (var yearKey in this.apidata) {
          var currentAnz = 0;
          var currentVerlassen = 0;
          for (var x in this.apidata[yearKey]) {
            currentAnz += this.apidata[yearKey][x].anzahl;
            currentVerlassen += this.apidata[yearKey][x].verlassene;
          }
          fluktuation.push((currentVerlassen / currentAnz) * 100);
          labels.push(yearKey);
        }
        this.dataChart = fluktuation;
        this.labels = labels;
      }
      // monat
      else if (this.filters.select == "m") {

var twelveMonths = this.getLastTwelve();

        var labels = [];
        var fluktuation = [];
        for (var yearKey in twelveMonths) {
          var currentAnz = 0;
          var currentVerlassen = 0;
          for (var x in twelveMonths[yearKey]) {
            fluktuation.push(
              (twelveMonths[yearKey][x].verlassene /
                twelveMonths[yearKey][x].anzahl) *
                100
            );
             labels.push(
              this.monthMap[twelveMonths[yearKey][x].monat] + " " + yearKey
            );
          }
        }
        this.dataChart = fluktuation;
        this.labels = labels;
      } else {
        console.log("fehler mitarbeiter filter");
      }
    },
    getNewestYear: function() {
      var max = 0;
      for (var year in this.apidata) {
        max = max < parseFloat(year) ? parseFloat(year) : max;
      }
      return max;
    },

    //search for the actual year and add the months to the object
    //Add x months of the year before the object
    getLastTwelve: function() {
      var newestYear = this.getNewestYear();
      var count = 0;
      var twelveMonths = new Object();
      for (var i = 0; i < this.apidata[newestYear].length; ++i) {
        count++;
      }
      var monthsYearBefore = 12 - count;

      var key1 = newestYear - 1;
      var key2 = newestYear;
      twelveMonths[key1] = this.apidata[newestYear - 1].slice(-monthsYearBefore);
      twelveMonths[key2] = this.apidata[newestYear];

      return twelveMonths;
    },
  },
  mounted() {
    this.filters.select = "y";
    this.updateChart();
  }
};
</script>

<style>
</style>
