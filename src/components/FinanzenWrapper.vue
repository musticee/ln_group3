<template>
  <div id="finanzenWrapper">
    <!--   -->

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

    <!-- -->

    <!-- <h1>Finanzen</h1>
        <div class="row">
            <div class="col-5">
                <FinanzenChart/>
            </div>
        </div>
        <h1>Ist Soll</h1>
        <div class="row">
            <div class="col-5">
                <IstSollChart/>
            </div>
    </div>-->
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
      dummy2: {
        "2018": [
          {
            monat: 1,
            umsatz: 7.9,
            kosten: 3.9,
            anzahlBestellungen: 1,
            anzahlMitarbeiter: 2.4
          },
          {
            monat: 2,
            umsatz: 3.9,
            kosten: 1.5,
            anzahlBestellungen: 1,
            anzahlMitarbeiter: 2.4
          },
          {
            monat: 3,
            umsatz: 5.9,
            kosten: 2.2,
            anzahlBestellungen: 1,
            anzahlMitarbeiter: 2.4
          },
          {
            monat: 4,
            umsatz: 6.9,
            kosten: 3.1,
            anzahlBestellungen: 1,
            anzahlMitarbeiter: 2.4
          },
          {
            monat: 5,
            umsatz: 6.9,
            kosten: 3.1,
            anzahlBestellungen: 1,
            anzahlMitarbeiter: 2.4
          },
          {
            monat: 6,
            umsatz: 3.9,
            kosten: 1.5,
            anzahlBestellungen: 1,
            anzahlMitarbeiter: 2.4
          },
          {
            monat: 7,
            umsatz: 7.9,
            kosten: 3.9,
            anzahlBestellungen: 1,
            anzahlMitarbeiter: 2.4
          },
          {
            monat: 8,
            umsatz: 5.9,
            kosten: 2.2,
            anzahlBestellungen: 1,
            anzahlMitarbeiter: 2.4
          },
          {
            monat: 9,
            umsatz: 7.9,
            kosten: 3.9,
            anzahlBestellungen: 1,
            anzahlMitarbeiter: 2.4
          },
          {
            monat: 10,
            umsatz: 6.9,
            kosten: 3.1,
            anzahlBestellungen: 1,
            anzahlMitarbeiter: 2.4
          },
          {
            monat: 11,
            umsatz: 3.9,
            kosten: 1.5,
            anzahlBestellungen: 1,
            anzahlMitarbeiter: 2.4
          },
          {
            monat: 12,
            umsatz: 5.9,
            kosten: 2.2,
            anzahlBestellungen: 1,
            anzahlMitarbeiter: 2.4
          }
        ],
        "2019": [
          {
            monat: 1,
            umsatz: 7.9,
            kosten: 3.9,
            anzahlBestellungen: 1,
            anzahlMitarbeiter: 2.4
          },
          {
            monat: 2,
            umsatz: 6.9,
            kosten: 3.1,
            anzahlBestellungen: 1,
            anzahlMitarbeiter: 2.4
          },
          {
            monat: 3,
            umsatz: 36.0,
            kosten: 15.700000000000001,
            anzahlBestellungen: 5,
            anzahlMitarbeiter: 2.4
          },
          {
            monat: 4,
            umsatz: 0.0,
            kosten: 0.0,
            anzahlBestellungen: 0,
            anzahlMitarbeiter: 1.4
          },
          {
            monat: 5,
            umsatz: 0.0,
            kosten: 0.0,
            anzahlBestellungen: 0,
            anzahlMitarbeiter: 1.4
          },
          {
            monat: 6,
            umsatz: 0.0,
            kosten: 0.0,
            anzahlBestellungen: 0,
            anzahlMitarbeiter: 1.4
          },
          {
            monat: 7,
            umsatz: 0.0,
            kosten: 0.0,
            anzahlBestellungen: 0,
            anzahlMitarbeiter: 1.4
          },
          {
            monat: 8,
            umsatz: 0.0,
            kosten: 0.0,
            anzahlBestellungen: 0,
            anzahlMitarbeiter: 1.6
          },
          {
            monat: 9,
            umsatz: 0.0,
            kosten: 0.0,
            anzahlBestellungen: 0,
            anzahlMitarbeiter: 1.6
          },
          {
            monat: 10,
            umsatz: 0.0,
            kosten: 0.0,
            anzahlBestellungen: 0,
            anzahlMitarbeiter: 1.6
          },
          {
            monat: 11,
            umsatz: 0.0,
            kosten: 0.0,
            anzahlBestellungen: 0,
            anzahlMitarbeiter: 1.6
          },
          {
            monat: 12,
            umsatz: 0.0,
            kosten: 0.0,
            anzahlBestellungen: 0,
            anzahlMitarbeiter: 1.6
          }
        ]
      },
      dummy: {},
      dummy3: {
        "2016": [
          {
            monat: 1,
            umsatz: 4050,
            kosten: 1570,
            anzahlMitarbeiter: 100,
            anzahlBestellungen: 20040
          },
          {
            monat: 2,
            umsatz: 4000,
            kosten: 1500,
            anzahlMitarbeiter: 102,
            anzahlBestellungen: 21000
          },
          {
            monat: 3,
            umsatz: 4300,
            kosten: 1400,
            anzahlMitarbeiter: 99,
            anzahlBestellungen: 20034
          },
          {
            monat: 4,
            umsatz: 4400,
            kosten: 1800,
            anzahlMitarbeiter: 98,
            anzahlBestellungen: 20780
          },
          {
            monat: 5,
            umsatz: 4330,
            kosten: 1440,
            anzahlMitarbeiter: 97,
            anzahlBestellungen: 19300
          },
          {
            monat: 6,
            umsatz: 4990,
            kosten: 1220,
            anzahlMitarbeiter: 93,
            anzahlBestellungen: 19980
          },
          {
            monat: 7,
            umsatz: 4020,
            kosten: 1320,
            anzahlMitarbeiter: 101,
            anzahlBestellungen: 21080
          },
          {
            monat: 8,
            umsatz: 4109,
            kosten: 2330,
            anzahlMitarbeiter: 102,
            anzahlBestellungen: 22220
          },
          {
            monat: 9,
            umsatz: 4222,
            kosten: 1530,
            anzahlMitarbeiter: 104,
            anzahlBestellungen: 23303
          },
          {
            monat: 10,
            umsatz: 4330,
            kosten: 1240,
            anzahlMitarbeiter: 98,
            anzahlBestellungen: 20066
          },
          {
            monat: 11,
            umsatz: 4044,
            kosten: 1300,
            anzahlMitarbeiter: 100,
            anzahlBestellungen: 20990
          },
          {
            monat: 12,
            umsatz: 4012,
            kosten: 1200,
            anzahlMitarbeiter: 103,
            anzahlBestellungen: 21222
          }
        ],
        "2017": [
          {
            monat: 1,
            umsatz: 4350,
            kosten: 1270,
            anzahlMitarbeiter: 102,
            anzahlBestellungen: 20140
          },
          {
            monat: 2,
            umsatz: 3400,
            kosten: 1230,
            anzahlMitarbeiter: 105,
            anzahlBestellungen: 18000
          },
          {
            monat: 3,
            umsatz: 4390,
            kosten: 1200,
            anzahlMitarbeiter: 89,
            anzahlBestellungen: 22034
          },
          {
            monat: 4,
            umsatz: 4400,
            kosten: 1300,
            anzahlMitarbeiter: 108,
            anzahlBestellungen: 23780
          },
          {
            monat: 5,
            umsatz: 4370,
            kosten: 1240,
            anzahlMitarbeiter: 97,
            anzahlBestellungen: 18300
          },
          {
            monat: 6,
            umsatz: 4290,
            kosten: 1920,
            anzahlMitarbeiter: 91,
            anzahlBestellungen: 17980
          },
          {
            monat: 7,
            umsatz: 3920,
            kosten: 1620,
            anzahlMitarbeiter: 103,
            anzahlBestellungen: 24080
          },
          {
            monat: 8,
            umsatz: 5109,
            kosten: 1832,
            anzahlMitarbeiter: 101,
            anzahlBestellungen: 20220
          },
          {
            monat: 9,
            umsatz: 4422,
            kosten: 1590,
            anzahlMitarbeiter: 94,
            anzahlBestellungen: 24303
          },
          {
            monat: 10,
            umsatz: 3930,
            kosten: 1440,
            anzahlMitarbeiter: 98,
            anzahlBestellungen: 22766
          },
          {
            monat: 11,
            umsatz: 4544,
            kosten: 1400,
            anzahlMitarbeiter: 89,
            anzahlBestellungen: 19390
          },
          {
            monat: 12,
            umsatz: 4612,
            kosten: 1700,
            anzahlMitarbeiter: 109,
            anzahlBestellungen: 25222
          }
        ],
        "2018": [
          {
            monat: 1,
            umsatz: 4150,
            kosten: 1210,
            anzahlMitarbeiter: 102,
            anzahlBestellungen: 20740
          },
          {
            monat: 2,
            umsatz: 3490,
            kosten: 1130,
            anzahlMitarbeiter: 100,
            anzahlBestellungen: 19900
          },
          {
            monat: 3,
            umsatz: 4190,
            kosten: 1300,
            anzahlMitarbeiter: 89,
            anzahlBestellungen: 21934
          },
          {
            monat: 4,
            umsatz: 4129,
            kosten: 1760,
            anzahlMitarbeiter: 101,
            anzahlBestellungen: 22750
          },
          {
            monat: 5,
            umsatz: 4380,
            kosten: 1540,
            anzahlMitarbeiter: 93,
            anzahlBestellungen: 19300
          },
          {
            monat: 6,
            umsatz: 4680,
            kosten: 1560,
            anzahlMitarbeiter: 97,
            anzahlBestellungen: 19980
          },
          {
            monat: 7,
            umsatz: 3820,
            kosten: 1820,
            anzahlMitarbeiter: 103,
            anzahlBestellungen: 17080
          },
          {
            monat: 8,
            umsatz: 4309,
            kosten: 1232,
            anzahlMitarbeiter: 101,
            anzahlBestellungen: 19220
          },
          {
            monat: 9,
            umsatz: 3922,
            kosten: 1590,
            anzahlMitarbeiter: 99,
            anzahlBestellungen: 22303
          },
          {
            monat: 10,
            umsatz: 4430,
            kosten: 1640,
            anzahlMitarbeiter: 95,
            anzahlBestellungen: 22766
          },
          {
            monat: 11,
            umsatz: 4244,
            kosten: 1499,
            anzahlMitarbeiter: 87,
            anzahlBestellungen: 18990
          },
          {
            monat: 12,
            umsatz: 4812,
            kosten: 1755,
            anzahlMitarbeiter: 103,
            anzahlBestellungen: 22222
          }
        ],
        "2019": [
          {
            monat: 1,
            umsatz: 3950,
            kosten: 1110,
            anzahlMitarbeiter: 99,
            anzahlBestellungen: 19740
          },
          {
            monat: 2,
            umsatz: 4190,
            kosten: 1330,
            anzahlMitarbeiter: 110,
            anzahlBestellungen: 23900
          },
          {
            monat: 3,
            umsatz: 4390,
            kosten: 1420,
            anzahlMitarbeiter: 99,
            anzahlBestellungen: 23932
          },
          {
            monat: 4,
            umsatz: 4329,
            kosten: 1460,
            anzahlMitarbeiter: 112,
            anzahlBestellungen: 24750
          } /*,
          {
            monat: 5,
            umsatz: 4280,
            kosten: 1840,
            anzahlMitarbeiter: 98,
            anzahlBestellungen: 18300
          },
          {
            monat: 6,
            umsatz: 4380,
            kosten: 1860,
            anzahlMitarbeiter: 99,
            anzahlBestellungen: 21980
          },
          {
            monat: 7,
            umsatz: 4520,
            kosten: 1920,
            anzahlMitarbeiter: 102,
            anzahlBestellungen: 22080
          },
          {
            monat: 8,
            umsatz: 4109,
            kosten: 1632,
            anzahlMitarbeiter: 103,
            anzahlBestellungen: 21220
          },
          {
            monat: 9,
            umsatz: 4422,
            kosten: 1490,
            anzahlMitarbeiter: 99,
            anzahlBestellungen: 21303
          },
          {
            monat: 10,
            umsatz: 4630,
            kosten: 1340,
            anzahlMitarbeiter: 99,
            anzahlBestellungen: 22766
          },
          {
            monat: 11,
            umsatz: 3978,
            kosten: 1589,
            anzahlMitarbeiter: 94,
            anzahlBestellungen: 18990
          },
          {
            monat: 12,
            umsatz: 4612,
            kosten: 1555,
            anzahlMitarbeiter: 108,
            anzahlBestellungen: 21111
          }*/
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
            currentUmsatz += this.dummy[yearKey][x].umsatz;
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
            umsatz.push(twelveMonths[yearKey][x].umsatz);
            labels.push(
              this.monthMap[twelveMonths[yearKey][x].monat] + " " + yearKey
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
            currentUmsatz += this.dummy[yearKey][x].umsatz;
            currentGuests += this.dummy[yearKey][x].anzahlBestellungen;
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
              twelveMonths[yearKey][x].umsatz /
                twelveMonths[yearKey][x].anzahlBestellungen
            );
            labels.push(
              this.monthMap[twelveMonths[yearKey][x].monat] + " " + yearKey
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
            currentUmsatz += this.dummy[yearKey][x].umsatz;
            currentMas += this.dummy[yearKey][x].anzahlMitarbeiter;
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
              twelveMonths[yearKey][x].umsatz /
                twelveMonths[yearKey][x].anzahlMitarbeiter
            );
            labels.push(
              this.monthMap[twelveMonths[yearKey][x].monat] + " " + yearKey
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
              this.dummy[yearKey][x].umsatz - this.dummy[yearKey][x].kosten;
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
              twelveMonths[yearKey][x].umsatz - this.dummy[yearKey][x].kosten
            );
            labels.push(
              this.monthMap[twelveMonths[yearKey][x].monat] + " " + yearKey
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
              this.dummy[yearKey][x].umsatz - this.dummy[yearKey][x].kosten;
            currentGuests += this.dummy[yearKey][x].anzahlBestellungen;
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
              (twelveMonths[yearKey][x].umsatz -
                twelveMonths[yearKey][x].kosten) /
                twelveMonths[yearKey][x].anzahlBestellungen
            );
            labels.push(
              this.monthMap[twelveMonths[yearKey][x].monat] + " " + yearKey
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
              this.dummy[yearKey][x].umsatz - this.dummy[yearKey][x].kosten;
            currentMas += this.dummy[yearKey][x].anzahlMitarbeiter;
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
              (twelveMonths[yearKey][x].umsatz -
                twelveMonths[yearKey][x].kosten) /
                twelveMonths[yearKey][x].anzahlMitarbeiter
            );
            labels.push(
              this.monthMap[twelveMonths[yearKey][x].monat] + " " + yearKey
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
    devFunc: function() {
      console.log("no dev func at the moment");
    },
    getApiData: function() {
      axios
        /*  An dieser Stelle haben wir den Output von unserer Api 

        .get("http://localhost:8080/infmapi/v1/finanzen")*/
        .get("http://demo7518527.mockable.io/finanzen")
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
