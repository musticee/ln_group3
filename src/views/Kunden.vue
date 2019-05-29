<template>
  <div id="kunden">
    <div class="row">
      <div class="col-lg-12 col-sm-12 dashPanel">
        <div class="chardDiv">
          <h1>
            Kundenzufriedenheit
          </h1>
          <KundenWrapper/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import KundenWrapper from "../components/KundenWrapper";

  export default {
  name: "kunden",
  components: {
    KundenWrapper
  },
  data() {
    return {};
  }
};
</script>
