<template>
  <div id="finanzen" class>
    <FinanzenWrapper/>
  </div>
</template>

<script>
import FinanzenWrapper from "../components/FinanzenWrapper";

export default {
  name: "finanzen",
  props: ["originDashboard"],
  components: {
    FinanzenWrapper
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
