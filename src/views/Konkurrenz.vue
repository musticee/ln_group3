<template>
  <div id="konkurrenz">
    <div class="row">
      <div class="col-lg-4 col-sm-12 dashPanel">
        <div class="chardDiv">
          <h1>Konkurrenz</h1>
          <KonkurrenzWrapper/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KonkurrenzWrapper from "../components/KonkurrenzWrapper";

export default {
  name: "konkurrenz",
  components: {
    KonkurrenzWrapper
  }
};
</script>

<style>
</style>
