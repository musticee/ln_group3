<template>
  <div id="mitarbeiter">
    <div class="row">
      <div class="col-lg-4 col-sm-12 dashPanel">
        <div class="chardDiv">
          <h1>Mitarbeiterfluktuationsquote</h1>
          <MitarbeiterWrapper/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MitarbeiterWrapper from "../components/MitarbeiterWrapper";

  export default {
  name: "mitarbeiter",
  components: {
    MitarbeiterWrapper
  }
};
</script>
