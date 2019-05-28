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
  </div>
</template>

<script>
import FinanzenWrapper from "../components/FinanzenWrapper";
import IstSollChart from "../charts/IstSollChart";

export default {
  name: "finanzen",
  components: {
    FinanzenWrapper,
    IstSollChart
  },
  data() {
    return {};
  },

  methods: {}
};
</script>

<style>
.singleVue {
  border: 5px solid red;
}
</style>
