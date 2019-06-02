<template>
  <div id="finanzen" class>
    <div class="row">
      <div class="col-lg-4 col-sm-12 dashPanel">
        <div class="chardDiv">
          <FinanzenWrapper/>
        </div>
      </div>
      <div class="col-lg-4 col-sm-12 dashPanel">
        <div class="chardDiv">
          <h1>Ist-Soll (Umsatz)</h1>
          <IstSollChart/>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 col-sm-12 dashPanel">
        <div class="chardDiv">
          <h1>Umsatzstärkste Filialen/Produkte</h1>
          <Ranglisten/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FinanzenWrapper from "../components/FinanzenWrapper";
  import IstSollChart from "../charts/IstSollChart";
  import Ranglisten from "../components/Ranglisten"

  export default {
  name: "finanzen",
  components: {
    FinanzenWrapper,
    IstSollChart,
    Ranglisten
  },
  data() {
    return {};
  },

  methods: {}
};
</script>
