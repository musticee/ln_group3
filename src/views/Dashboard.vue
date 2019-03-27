<template>
  <div>
    <div class="row">
      <div class="col-lg-4 col-sm-12 chardDiv">
        <h2>Finanzkennzahlen</h2>Umsatz&nbsp;&nbsp;
        <Customswitch/>&nbsp;&nbsp;Gewinn
        <FinanzenChart class="chart-wrapper"/>

        <div class="row">
          <div class="col-md-4">
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>Pro Gast</option>
              <option value="1">Pro Mitarbeiter</option>
            </select>
          </div>
          <div class="col-md-4">
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>Pro Jahr</option>
              <option value="1">Pro Monat</option>
            </select>
          </div>
          <div class="col-md-4">
            <router-link to="/finanzen">
              <a class="btn btn-outline-secondary" role="button">Details</a>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-12 chardDiv">
        <h2>Ist-Soll (Total)</h2>
        <img src="../assets/img/ist_soll.png" alt="Ist-Soll" height="280" style="margin-top: 80px;">
      </div>
      <div class="col-lg-4 col-sm-12 chardDiv">
        <h2>Mitarbeiterfluktuationsquote</h2>
        <MitarbeiterChart/>
        <router-link to="/mitarbeiter">
          <a class="btn btn-outline-dark btn-sm" role="button">Details</a>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-8 chardDiv">
        <h2>Kundenzufriedenheit</h2>
        <div class="row">
          <div class="col-12">
            <img src="../assets/img/smileys.png" alt="Ist-Soll" height="220">
          </div>
          <div class="col-4">Reklamationsquote</div>
          <div class="col-4">Durchlaufszeit</div>
        </div>
        <router-link to="/kunden">
          <a class="btn btn-outline-dark btn-sm" role="button">Details</a>
        </router-link>
      </div>
      <div class="col-sm-4 chardDiv">
        <h2>Marktanteil</h2>
        <KonkurrenzChart/>
        <router-link to="/konkurrenz">
          <a class="btn btn-outline-dark btn-sm" role="button">Details</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import FinanzenChart from "../charts/FinanzenChart";
import MitarbeiterChart from "../charts/MitarbeiterChart";
import KonkurrenzChart from "../charts/KonkurrenzChart";
import Customswitch from "../components/Customswitch";

export default {
  name: "dashboard",
  components: {
    FinanzenChart,
    MitarbeiterChart,
    KonkurrenzChart,
    Customswitch
  }
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
/*canvas {
  height: 250px;
  width: 500px;
}*/
.chardDiv {
  margin-top: 40px;
  padding: 50px;
}
</style>

