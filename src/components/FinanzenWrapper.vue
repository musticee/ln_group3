<template>
  <div id="finanzenWrapper">
    <span class="h2">Umsatz&nbsp;&nbsp;</span>
    <Customswitch v-on:change-chart="changeData"/>
    <span class="h2">&nbsp;&nbsp;Gewinn</span>
    <FinanzenChart
            v-bind:dataChartProp="dataChart"
            v-bind:labelsChartProp="labels"
            v-bind:titleChartProp="title"
            :width="360"
            :height="220"
    />

    <div class="row">
      <div class="col-md-6">
        <select @change="updateDataFilter1($event)" class="custom-select" id="inputGroupSelect01">
          <option value="y" selected>Pro Jahr</option>
          <option value="m">Pro Monat</option>
        </select>
      </div>
      <div class="col-md-6">
        <select @change="updateDataFilter2($event)" class="custom-select" id="inputGroupSelect02">
          <option value="total" selected>Total</option>
          <option value="gast">Pro Gast</option>
          <option value="ma">Pro Mitarbeiter</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
  import FinanzenChart from "../charts/FinanzenChart";
  import IstSollChart from "../charts/IstSollChart";
  import Customswitch from "../components/Customswitch";
  import axios from "axios";
  export default {
    name: "finanzenWrapper",
    props: ["originDashboard"],
    components: {
      FinanzenChart,
      IstSollChart,
      Customswitch
    },
    data() {
      return {
        addPanel: false,
        dummy: {},
        dataChart: [],
        labels: [],
        title: "",
        filters: [
          {
            isActive: false,
            select1: "y",
            select2: "total"
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
    created() {},
    methods: {
      checkForFrame: function() {
        if (!originDashboard) {
          this.addPanel = true;
        }
      },
      updateDataFilter1: function() {
        this.filters.select1 = event.target.value;
        this.updateChart();
      },
      updateDataFilter2: function() {
        this.filters.select2 = event.target.value;
        this.updateChart();
      },
      changeData: function() {
        this.filters.isActive = !this.filters.isActive;
        this.updateChart();
      },
      updateChart: function() {
        //umsatz & jahr & total
        if (
                !this.filters.isActive &&
                this.filters.select1 == "y" &&
                this.filters.select2 == "total"
        ) {
          var umsatz = [];
          var labels = [];
          for (var yearKey in this.dummy) {
            var currentUmsatz = 0;
            for (var x in this.dummy[yearKey]) {
              currentUmsatz += this.dummy[yearKey][x].revenue;
            }
            umsatz.push(currentUmsatz);
            labels.push(yearKey);
          }
          this.labels = labels;
          this.dataChart = umsatz;
          this.title = "Umsatz";
        }
        //umsatz & monat & total
        else if (
                !this.filters.isActive &&
                this.filters.select1 == "m" &&
                this.filters.select2 == "total"
        ) {
          var umsatz = [];
          var labels = [];
          var twelveMonths = this.getLastTwelve();
          for (var yearKey in twelveMonths) {
            for (var x in twelveMonths[yearKey]) {
              umsatz.push(twelveMonths[yearKey][x].revenue);
              labels.push(
                      this.monthMap[twelveMonths[yearKey][x].month] + " " + yearKey
              );
            }
          }
          this.labels = labels;
          this.dataChart = umsatz;
          this.title = "Umsatz";
        }
        //umsatz & jahr & gast
        else if (
                !this.filters.isActive &&
                this.filters.select1 == "y" &&
                this.filters.select2 == "gast"
        ) {
          var umsatzPerGuest = [];
          var labels = [];
          for (var yearKey in this.dummy) {
            var currentUmsatz = 0;
            var currentGuests = 0;
            for (var x in this.dummy[yearKey]) {
              currentUmsatz += this.dummy[yearKey][x].revenue;
              currentGuests += this.dummy[yearKey][x].amountOfOrders;
            }
            umsatzPerGuest.push(currentUmsatz / currentGuests);
            labels.push(yearKey);
          }
          this.labels = labels;
          this.dataChart = umsatzPerGuest;
          this.title = "Umsatz pro Gast";
        }
        //umsatz & monat & gast
        else if (
                !this.filters.isActive &&
                this.filters.select1 == "m" &&
                this.filters.select2 == "gast"
        ) {
          var umsatzPerGuest = [];
          var labels = [];
          var twelveMonths = this.getLastTwelve();
          for (var yearKey in twelveMonths) {
            for (var x in twelveMonths[yearKey]) {
              umsatzPerGuest.push(
                      twelveMonths[yearKey][x].revenue /
                      twelveMonths[yearKey][x].amountOfOrders
              );
              labels.push(
                      this.monthMap[twelveMonths[yearKey][x].month] + " " + yearKey
              );
            }
          }
          this.labels = labels;
          this.dataChart = umsatzPerGuest;
          this.title = "Umsatz pro Gast";
        }
        //umsatz & jahr & mitarbeiter
        else if (
                !this.filters.isActive &&
                this.filters.select1 == "y" &&
                this.filters.select2 == "ma"
        ) {
          var umsatzPerMa = [];
          var labels = [];
          for (var yearKey in this.dummy) {
            var currentUmsatz = 0;
            var currentMas = 0;
            for (var x in this.dummy[yearKey]) {
              currentUmsatz += this.dummy[yearKey][x].revenue;
              currentMas += this.dummy[yearKey][x].amountOfEmployees;
            }
            umsatzPerMa.push(currentUmsatz / currentMas);
            labels.push(yearKey);
          }
          this.labels = labels;
          this.dataChart = umsatzPerMa;
          this.title = "Umsatz pro Mitarbeiter";
        }
        //umsatz & monat & mitarbeiter
        else if (
                !this.filters.isActive &&
                this.filters.select1 == "m" &&
                this.filters.select2 == "ma"
        ) {
          var umsatzPerMa = [];
          var labels = [];
          var twelveMonths = this.getLastTwelve();
          for (var yearKey in twelveMonths) {
            for (var x in twelveMonths[yearKey]) {
              umsatzPerMa.push(
                      twelveMonths[yearKey][x].revenue /
                      twelveMonths[yearKey][x].amountOfEmployees
              );
              labels.push(
                      this.monthMap[twelveMonths[yearKey][x].month] + " " + yearKey
              );
            }
          }
          this.labels = labels;
          this.dataChart = umsatzPerMa;
          this.title = "Umsatz pro Mitarbeiter";
        }
        //gewinn & jahr & total
        else if (
                this.filters.isActive &&
                this.filters.select1 == "y" &&
                this.filters.select2 == "total"
        ) {
          var gewinn = [];
          var labels = [];
          for (var yearKey in this.dummy) {
            var currentGewinn = 0;
            for (var x in this.dummy[yearKey]) {
              currentGewinn +=
                      this.dummy[yearKey][x].revenue - this.dummy[yearKey][x].costs;
            }
            gewinn.push(currentGewinn);
            labels.push(yearKey);
          }
          this.labels = labels;
          this.dataChart = gewinn;
          this.title = "Gewinn";
        }
        //gewinn & monat & total
        else if (
                this.filters.isActive &&
                this.filters.select1 == "m" &&
                this.filters.select2 == "total"
        ) {
          var gewinn = [];
          var labels = [];
          var twelveMonths = this.getLastTwelve();
          for (var yearKey in twelveMonths) {
            for (var x in twelveMonths[yearKey]) {
              gewinn.push(
                      twelveMonths[yearKey][x].revenue - this.dummy[yearKey][x].costs
              );
              labels.push(
                      this.monthMap[twelveMonths[yearKey][x].month] + " " + yearKey
              );
            }
          }
          this.labels = labels;
          this.dataChart = gewinn;
          this.title = "Gewinn";
        }
        //gewinn & jahr & gast
        else if (
                this.filters.isActive &&
                this.filters.select1 == "y" &&
                this.filters.select2 == "gast"
        ) {
          var gewinnPerGuest = [];
          var labels = [];
          for (var yearKey in this.dummy) {
            var currentGewinn = 0;
            var currentGuests = 0;
            for (var x in this.dummy[yearKey]) {
              currentGewinn +=
                      this.dummy[yearKey][x].revenue - this.dummy[yearKey][x].costs;
              currentGuests += this.dummy[yearKey][x].amountOfOrders;
            }
            gewinnPerGuest.push(currentGewinn / currentGuests);
            labels.push(yearKey);
          }
          this.labels = labels;
          this.dataChart = gewinnPerGuest;
          this.title = "Gewinn pro Gast";
        }
        //gewinn & monat & gast
        else if (
                this.filters.isActive &&
                this.filters.select1 == "m" &&
                this.filters.select2 == "gast"
        ) {
          var gewinnPerGuest = [];
          var labels = [];
          var twelveMonths = this.getLastTwelve();
          for (var yearKey in twelveMonths) {
            for (var x in twelveMonths[yearKey]) {
              gewinnPerGuest.push(
                      (twelveMonths[yearKey][x].revenue -
                              twelveMonths[yearKey][x].costs) /
                      twelveMonths[yearKey][x].amountOfOrders
              );
              labels.push(
                      this.monthMap[twelveMonths[yearKey][x].month] + " " + yearKey
              );
            }
          }
          this.labels = labels;
          this.dataChart = gewinnPerGuest;
          this.title = "Gewinn pro Gast";
        }
        //gewinn & jahr & mitarbeiter
        else if (
                this.filters.isActive &&
                this.filters.select1 == "y" &&
                this.filters.select2 == "ma"
        ) {
          var gewinnPerMa = [];
          var labels = [];
          for (var yearKey in this.dummy) {
            var currentGewinn = 0;
            var currentMas = 0;
            for (var x in this.dummy[yearKey]) {
              currentGewinn +=
                      this.dummy[yearKey][x].revenue - this.dummy[yearKey][x].costs;
              currentMas += this.dummy[yearKey][x].amountOfEmployees;
            }
            gewinnPerMa.push(currentGewinn / currentMas);
            labels.push(yearKey);
          }
          this.labels = labels;
          this.dataChart = gewinnPerMa;
          this.title = "Gewinn pro Mitarbeiter";
        }
        //gewinn & monat & mitarbeiter
        else if (
                this.filters.isActive &&
                this.filters.select1 == "m" &&
                this.filters.select2 == "ma"
        ) {
          var gewinnPerMa = [];
          var labels = [];
          var twelveMonths = this.getLastTwelve();
          for (var yearKey in twelveMonths) {
            for (var x in twelveMonths[yearKey]) {
              gewinnPerMa.push(
                      (twelveMonths[yearKey][x].revenue -
                              twelveMonths[yearKey][x].costs) /
                      twelveMonths[yearKey][x].amountOfEmployees
              );
              labels.push(
                      this.monthMap[twelveMonths[yearKey][x].month] + " " + yearKey
              );
            }
          }
          this.labels = labels;
          this.dataChart = gewinnPerMa;
          this.title = "Gewinn pro Mitarbeiter";
        } else {
          console.log("filterError");
          console.log(
                  "1: " +
                  this.filters.isActive +
                  " 2= " +
                  this.filters.select1 +
                  " 3= " +
                  this.filters.select2
          );
        }
      },
      getNewestYear: function() {
        var max = 0;
        for (var year in this.dummy) {
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
        for (var i = 0; i < this.dummy[newestYear].length; ++i) {
          count++;
        }
        var monthsYearBefore = 12 - count;
        var key1 = newestYear - 1;
        var key2 = newestYear;
        twelveMonths[key1] = this.dummy[newestYear - 1].slice(-monthsYearBefore);
        twelveMonths[key2] = this.dummy[newestYear];
        return twelveMonths;
      },
      getApiData: function() {
        axios
                .get("http://localhost:8080/infmapi/v1/financialFigures")
                .then(res => {
                  this.dummy = res.data;
                  this.filters.isActive = false;
                  this.filters.select1 = "y";
                  this.filters.select2 = "total";
                  this.updateChart();
                })
                .catch(err => console.log(err));
      }
    },
    mounted() {
      this.getApiData();
    }
  };
</script>

<style>
</style>