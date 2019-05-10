<template>
  <div>
    <div class="row">
      <div class="col-lg-4 col-sm-12 dashPanel">
        <div class="chardDiv">
          <FinanzenWrapper :originDashboard="true"/>
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
          <MitarbeiterWrapper/>
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
    <!--<div class="row">
      <div class="col-sm-12 dashPanel">
        <div class="chardDiv">
          <h2>Dev Panel</h2>
          <input type="button" v-on:click="devFunc()" value="dev">
          <div v-bind:key="album.id" v-for="album in albums">
            <h4>album: {{album.title}}</h4>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import FinanzenWrapper from "../components/FinanzenWrapper";
import MitarbeiterWrapper from "../components/MitarbeiterWrapper";
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
    FinanzenWrapper,
    MitarbeiterWrapper,
    KonkurrenzChart,
    Customswitch
  },
  data() {
    return {};
  },

  methods: {
    devFunc: function() {
      console.log("no dev func at the moment");
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

