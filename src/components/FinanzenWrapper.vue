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
      dummy: {
        "2016": [
          {
            month: 1,
            revenue: 4050,
            costs: 1570,
            amountOfEmployees: 100,
            amountOfOrders: 20040
          },
          {
            month: 2,
            revenue: 4000,
            costs: 1500,
            amountOfEmployees: 102,
            amountOfOrders: 21000
          },
          {
            month: 3,
            revenue: 4300,
            costs: 1400,
            amountOfEmployees: 99,
            amountOfOrders: 20034
          },
          {
            month: 4,
            revenue: 4400,
            costs: 1800,
            amountOfEmployees: 98,
            amountOfOrders: 20780
          },
          {
            month: 5,
            revenue: 4330,
            costs: 1440,
            amountOfEmployees: 97,
            amountOfOrders: 19300
          },
          {
            month: 6,
            revenue: 4990,
            costs: 1220,
            amountOfEmployees: 93,
            amountOfOrders: 19980
          },
          {
            month: 7,
            revenue: 4020,
            costs: 1320,
            amountOfEmployees: 101,
            amountOfOrders: 21080
          },
          {
            month: 8,
            revenue: 4109,
            costs: 2330,
            amountOfEmployees: 102,
            amountOfOrders: 22220
          },
          {
            month: 9,
            revenue: 4222,
            costs: 1530,
            amountOfEmployees: 104,
            amountOfOrders: 23303
          },
          {
            month: 10,
            revenue: 4330,
            costs: 1240,
            amountOfEmployees: 98,
            amountOfOrders: 20066
          },
          {
            month: 11,
            revenue: 4044,
            costs: 1300,
            amountOfEmployees: 100,
            amountOfOrders: 20990
          },
          {
            month: 12,
            revenue: 4012,
            costs: 1200,
            amountOfEmployees: 103,
            amountOfOrders: 21222
          }
        ],
        "2017": [
          {
            month: 1,
            revenue: 4350,
            costs: 1270,
            amountOfEmployees: 102,
            amountOfOrders: 20140
          },
          {
            month: 2,
            revenue: 3400,
            costs: 1230,
            amountOfEmployees: 105,
            amountOfOrders: 18000
          },
          {
            month: 3,
            revenue: 4390,
            costs: 1200,
            amountOfEmployees: 89,
            amountOfOrders: 22034
          },
          {
            month: 4,
            revenue: 4400,
            costs: 1300,
            amountOfEmployees: 108,
            amountOfOrders: 23780
          },
          {
            month: 5,
            revenue: 4370,
            costs: 1240,
            amountOfEmployees: 97,
            amountOfOrders: 18300
          },
          {
            month: 6,
            revenue: 4290,
            costs: 1920,
            amountOfEmployees: 91,
            amountOfOrders: 17980
          },
          {
            month: 7,
            revenue: 3920,
            costs: 1620,
            amountOfEmployees: 103,
            amountOfOrders: 24080
          },
          {
            month: 8,
            revenue: 5109,
            costs: 1832,
            amountOfEmployees: 101,
            amountOfOrders: 20220
          },
          {
            month: 9,
            revenue: 4422,
            costs: 1590,
            amountOfEmployees: 94,
            amountOfOrders: 24303
          },
          {
            month: 10,
            revenue: 3930,
            costs: 1440,
            amountOfEmployees: 98,
            amountOfOrders: 22766
          },
          {
            month: 11,
            revenue: 4544,
            costs: 1400,
            amountOfEmployees: 89,
            amountOfOrders: 19390
          },
          {
            month: 12,
            revenue: 4612,
            costs: 1700,
            amountOfEmployees: 109,
            amountOfOrders: 25222
          }
        ],
        "2018": [
          {
            month: 1,
            revenue: 4150,
            costs: 1210,
            amountOfEmployees: 102,
            amountOfOrders: 20740
          },
          {
            month: 2,
            revenue: 3490,
            costs: 1130,
            amountOfEmployees: 100,
            amountOfOrders: 19900
          },
          {
            month: 3,
            revenue: 4190,
            costs: 1300,
            amountOfEmployees: 89,
            amountOfOrders: 21934
          },
          {
            month: 4,
            revenue: 4129,
            costs: 1760,
            amountOfEmployees: 101,
            amountOfOrders: 22750
          },
          {
            month: 5,
            revenue: 4380,
            costs: 1540,
            amountOfEmployees: 93,
            amountOfOrders: 19300
          },
          {
            month: 6,
            revenue: 4680,
            costs: 1560,
            amountOfEmployees: 97,
            amountOfOrders: 19980
          },
          {
            month: 7,
            revenue: 3820,
            costs: 1820,
            amountOfEmployees: 103,
            amountOfOrders: 17080
          },
          {
            month: 8,
            revenue: 4309,
            costs: 1232,
            amountOfEmployees: 101,
            amountOfOrders: 19220
          },
          {
            month: 9,
            revenue: 3922,
            costs: 1590,
            amountOfEmployees: 99,
            amountOfOrders: 22303
          },
          {
            month: 10,
            revenue: 4430,
            costs: 1640,
            amountOfEmployees: 95,
            amountOfOrders: 22766
          },
          {
            month: 11,
            revenue: 4244,
            costs: 1499,
            amountOfEmployees: 87,
            amountOfOrders: 18990
          },
          {
            month: 12,
            revenue: 4812,
            costs: 1755,
            amountOfEmployees: 103,
            amountOfOrders: 22222
          }
        ],
        "2019": [
          {
            month: 1,
            revenue: 3950,
            costs: 1110,
            amountOfEmployees: 99,
            amountOfOrders: 19740
          },
          {
            month: 2,
            revenue: 4190,
            costs: 1330,
            amountOfEmployees: 110,
            amountOfOrders: 23900
          },
          {
            month: 3,
            revenue: 4390,
            costs: 1420,
            amountOfEmployees: 99,
            amountOfOrders: 23932
          },
          {
            month: 4,
            revenue: 4329,
            costs: 1460,
            amountOfEmployees: 112,
            amountOfOrders: 24750
          }
        ]
      },
      dataChart: [20, 22, 25],
      labels: ["label 1"],
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
    /* 
    code für LN3
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
    }*/
  },
  mounted() {
    //this.getApiData();
    this.filters.isActive = false;
          this.filters.select1 = "y";
          this.filters.select2 = "total";
          this.updateChart();
  }
};
</script>

<style>
</style>
