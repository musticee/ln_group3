<template>
  <div>
    <div class="row">
      <div class="col-lg-4 col-sm-12 dashPanel">
        <div class="chardDiv">
          <span class="h2">Umsatz&nbsp;&nbsp;</span>
          <Customswitch v-on:change-chart="changeData"/>
          <span class="h2">&nbsp;&nbsp;Gewinn</span>
          <FinanzenChart v-bind:dataChartProp="dataChart" :width="360" :height="220"/>

          <div class="row">
            <div class="col-md-6">
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Pro Jahr</option>
                <option value="1">Pro Monat</option>
              </select>
            </div>
            <div class="col-md-6">
              <select class="custom-select" id="inputGroupSelect02">
                <option selected>Total</option>
                <option>Pro Gast</option>
                <option value="1">Pro Mitarbeiter</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-12 dashPanel">
        <div class="chardDiv">
          <h2>Ist-Soll (Total)</h2>
          <IstSollChart :width="250" :height="150"/>
        </div>
      </div>
      <div class="col-lg-5 col-sm-12 dashPanel">
        <div class="chardDiv">
          <h2>Mitarbeiterfluktuationsquote</h2>
          <MitarbeiterChart :width="360" :height="220"/>
          <div class="row">
            <div class="col-md-5">
              <select class="custom-select" id="inputGroupSelect03">
                <option selected>Pro Jahr</option>
                <option value="1">Pro Monat</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-7 dashPanel">
        <div class="chardDiv">
          <h2>Kundenzufriedenheit</h2>
          <div class="row">
            <div class="col-12">
              <Kunden/>
            </div>
            <div class="col-6">
              <h3>Reklamationsquote</h3>
              <p style="font-size: 55px; padding-left: 70px;">9.6%</p>
            </div>
            <div class="col-6">
              <h3>Durchlaufszeit</h3>
              <!-- <select class="custom-select" id="durchlaufzeitProdukt">
                                <option>burger</option>
              </select>-->
              <p style="font-size: 55px; ">7 Minuten</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-5 dashPanel">
        <div class="chardDiv">
          <h2>Marktanteil</h2>
          <KonkurrenzChart :width="360" :height="220"/>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 dashPanel">
        <div class="chardDiv">
          <h2>Dev Panel</h2>
          <input type="button" v-on="devFunc()" value="dev">
          <div v-bind:key="album.id" v-for="album in albums">
            <h4>album: {{album.title}}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FinanzenChart from "../charts/FinanzenChart";
import MitarbeiterChart from "../charts/MitarbeiterChart";
import KonkurrenzChart from "../charts/KonkurrenzChart";
import Customswitch from "../components/Customswitch";
import IstSollChart from "../charts/IstSollChart";
import Kunden from "./Kunden";

export default {
  name: "dashboard",
  props: ["albums"],
  components: {
    Kunden,
    IstSollChart,
    FinanzenChart,
    MitarbeiterChart,
    KonkurrenzChart,
    Customswitch
  },
  data() {
    return {
      dummy: {
        "2016": [
          {
            monat: 1,
            umsatz: 4050,
            kosten: 1570,
            ma: 100,
            gast: 20040
          },
          {
            monat: 2,
            umsatz: 4000,
            kosten: 1500,
            ma: 102,
            gast: 21000
          },
          {
            monat: 3,
            umsatz: 4300,
            kosten: 1400,
            ma: 99,
            gast: 20034
          },
          {
            monat: 4,
            umsatz: 4400,
            kosten: 1800,
            ma: 98,
            gast: 20780
          },
          {
            monat: 5,
            umsatz: 4330,
            kosten: 1440,
            ma: 97,
            gast: 19300
          },
          {
            monat: 6,
            umsatz: 4990,
            kosten: 1220,
            ma: 93,
            gast: 19980
          },
          {
            monat: 7,
            umsatz: 4020,
            kosten: 1320,
            ma: 101,
            gast: 21080
          },
          {
            monat: 8,
            umsatz: 4109,
            kosten: 2330,
            ma: 102,
            gast: 22220
          },
          {
            monat: 9,
            umsatz: 4222,
            kosten: 1530,
            ma: 104,
            gast: 23303
          },
          {
            monat: 10,
            umsatz: 4330,
            kosten: 1240,
            ma: 98,
            gast: 20066
          },
          {
            monat: 11,
            umsatz: 4044,
            kosten: 1300,
            ma: 100,
            gast: 20990
          },
          {
            monat: 12,
            umsatz: 4012,
            kosten: 1200,
            ma: 103,
            gast: 21222
          }
        ],
        "2017": [
          {
            monat: 1,
            umsatz: 4350,
            kosten: 1270,
            ma: 102,
            gast: 20140
          },
          {
            monat: 2,
            umsatz: 3400,
            kosten: 1230,
            ma: 105,
            gast: 18000
          },
          {
            monat: 3,
            umsatz: 4390,
            kosten: 1200,
            ma: 89,
            gast: 22034
          },
          {
            monat: 4,
            umsatz: 4400,
            kosten: 1300,
            ma: 108,
            gast: 23780
          },
          {
            monat: 5,
            umsatz: 4370,
            kosten: 1240,
            ma: 97,
            gast: 18300
          },
          {
            monat: 6,
            umsatz: 4290,
            kosten: 1920,
            ma: 91,
            gast: 17980
          },
          {
            monat: 7,
            umsatz: 3920,
            kosten: 1620,
            ma: 103,
            gast: 24080
          },
          {
            monat: 8,
            umsatz: 5109,
            kosten: 1832,
            ma: 101,
            gast: 20220
          },
          {
            monat: 9,
            umsatz: 4422,
            kosten: 1590,
            ma: 94,
            gast: 24303
          },
          {
            monat: 10,
            umsatz: 3930,
            kosten: 1440,
            ma: 98,
            gast: 22766
          },
          {
            monat: 11,
            umsatz: 4544,
            kosten: 1400,
            ma: 89,
            gast: 19390
          },
          {
            monat: 12,
            umsatz: 4612,
            kosten: 1700,
            ma: 109,
            gast: 25222
          }
        ],
        "2018": [
          {
            monat: 1,
            umsatz: 4150,
            kosten: 1210,
            ma: 102,
            gast: 20740
          },
          {
            monat: 2,
            umsatz: 3490,
            kosten: 1130,
            ma: 100,
            gast: 19900
          },
          {
            monat: 3,
            umsatz: 4190,
            kosten: 1300,
            ma: 89,
            gast: 21934
          },
          {
            monat: 4,
            umsatz: 4129,
            kosten: 1760,
            ma: 101,
            gast: 22750
          },
          {
            monat: 5,
            umsatz: 4380,
            kosten: 1540,
            ma: 93,
            gast: 19300
          },
          {
            monat: 6,
            umsatz: 4680,
            kosten: 1560,
            ma: 97,
            gast: 19980
          },
          {
            monat: 7,
            umsatz: 3820,
            kosten: 1820,
            ma: 103,
            gast: 17080
          },
          {
            monat: 8,
            umsatz: 4309,
            kosten: 1232,
            ma: 101,
            gast: 19220
          },
          {
            monat: 9,
            umsatz: 3922,
            kosten: 1590,
            ma: 99,
            gast: 22303
          },
          {
            monat: 10,
            umsatz: 4430,
            kosten: 1640,
            ma: 95,
            gast: 22766
          },
          {
            monat: 11,
            umsatz: 4244,
            kosten: 1499,
            ma: 87,
            gast: 18990
          },
          {
            monat: 12,
            umsatz: 4812,
            kosten: 1755,
            ma: 103,
            gast: 22222
          }
        ],
        "2019": [
          {
            monat: 1,
            umsatz: 3950,
            kosten: 1110,
            ma: 99,
            gast: 19740
          },
          {
            monat: 2,
            umsatz: 4190,
            kosten: 1330,
            ma: 110,
            gast: 23900
          },
          {
            monat: 3,
            umsatz: 4390,
            kosten: 1420,
            ma: 99,
            gast: 23932
          },
          {
            monat: 4,
            umsatz: 4329,
            kosten: 1460,
            ma: 112,
            gast: 24750
          },
          {
            monat: 5,
            umsatz: 4280,
            kosten: 1840,
            ma: 98,
            gast: 18300
          },
          {
            monat: 6,
            umsatz: 4380,
            kosten: 1860,
            ma: 99,
            gast: 21980
          },
          {
            monat: 7,
            umsatz: 4520,
            kosten: 1920,
            ma: 102,
            gast: 22080
          },
          {
            monat: 8,
            umsatz: 4109,
            kosten: 1632,
            ma: 103,
            gast: 21220
          },
          {
            monat: 9,
            umsatz: 4422,
            kosten: 1490,
            ma: 99,
            gast: 21303
          },
          {
            monat: 10,
            umsatz: 4630,
            kosten: 1340,
            ma: 99,
            gast: 22766
          },
          {
            monat: 11,
            umsatz: 3978,
            kosten: 1589,
            ma: 94,
            gast: 18990
          },
          {
            monat: 12,
            umsatz: 4612,
            kosten: 1555,
            ma: 108,
            gast: 21111
          }
        ]
      },

      dataUmsatz: [20, 22, 25],
      dataGewinn: [5, 2, 10],
      dataChart: [20, 22, 25],
      switchSettings: [
        {
          isActive: false
        }
      ]
    };
  },

  methods: {
    changeData: function() {
      //if (this.FinanzenChart.is)
      this.switchSettings.isActive = !this.switchSettings.isActive;
      console.log("data(dashboard): " + this.dataChart);
      console.log("true/false: " + this.switchSettings.isActive);
      if (this.switchSettings.isActive) {
        this.dataChart = this.dataGewinn;
      } else {
        this.dataChart = this.dataUmsatz;
      }
    },
    devFunc: function() {
      //console.log(this.dummy.2018);
    }
  }
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
.chardDiv {
  background-color: white;
  padding: 10px;
  width: 100%;
  height: 100%;
  -webkit-box-shadow: 0px 0px 4px 1px rgba(40, 40, 40, 0.4);
  -moz-box-shadow: 0px 0px 4px 1px rgba(40, 40, 40, 0.4);
  box-shadow: 0px 0px 4px 1px rgba(40, 40, 40, 0.4);
}
.dashPanel {
  padding: 8px;
  background-color: transparent;
}

select#durchlaufzeitProdukt option[value="burger"] {
  background-image: url(../assets/img/burger.png);
}
</style>

