<template>
  <div>
    <KonkurrenzChart :width="360" :height="220"/>
  </div>
</template>

<script>
  import KonkurrenzChart from "../charts/KonkurrenzChart";

  export default {
  name: "KonkurrenzWrapper",
  components: {
    KonkurrenzChart
  }
};
</script>