<template>
  <div id="dashboard">
    <div class="row justify-content-around">
      <div class="col-lg-4 col-sm-8 chardDiv">
        <h2>Finanzkennzahlen</h2>Umsatz&nbsp;&nbsp;
        <Customswitch/>&nbsp;&nbsp;Gewinn
        <FinanzenChart class="chart-wrapper"/>
        <router-link to="/finanzen">
          <a class="btn btn-outline-dark btn-sm" role="button">Details</a>
        </router-link>
      </div>
      <div class="col-lg-4 col-sm-8 chardDiv">
        <h2>Mitarbeiterfluktuationsquote</h2>
        <MitarbeiterChart/>
        <router-link to="/mitarbeiter">
          <a class="btn btn-outline-dark btn-sm" role="button">Details</a>
        </router-link>
      </div>
    </div>
    <div class="row justify-content-around">
      <div class="col-lg-4 col-sm-8 chardDiv">
        <h2>Kunden</h2>
        <router-link to="/kunden">
          <a class="btn btn-outline-dark btn-sm" role="button">Details</a>
        </router-link>
      </div>
      <div class="col-lg-4 col-sm-8 chardDiv">
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
}
</style>

