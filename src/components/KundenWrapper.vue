<template>
  <div>
    <div class="row">
      <div class="col-12">
        <KundenFeedback/>
      </div>
      <div class="col-6">
        <Reklamationsquote/>
      </div>
      <div class="col-6">
        <Durchlaufzeit/>
      </div>
    </div>
  </div>
</template>

<script>
import Durchlaufzeit from "./Durchlaufzeit";
import Reklamationsquote from "./Reklamationsquote";
import KundenFeedback from "./KundenFeedback";
export default {
  name: "KundenWrapper",
  components: {
    Durchlaufzeit,
    Reklamationsquote, 
    KundenFeedback
  }
};
</script>

<style>
</style>
