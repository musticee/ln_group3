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
                <option selected>Pro Gast</option>
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
          dataChart: [10, 39, 10]
      }
    },

    methods: {
        changeData: function() {
            this.dataChart = [10, 2, 15];
            console.log("data(dashboard): "+this.dataChart);
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

