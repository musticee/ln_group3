<template>
  <div>
    <h3>Durchlaufszeit</h3>
    <p style="font-size: 55px; ">{{this.durchlaufzeit}} Minuten</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Durchlaufzeit",
  data() {
    return {
      durchlaufzeit: ""
    };
  },
  methods: {
    getApiData: function() {
      axios
        /*.get("http://localhost:8080/infmapi/v1/durchlaufzeit")*/
        .get("http://demo7518527.mockable.io/durchlaufzeit")
        .then(res => {
          this.durchlaufzeit = this.fmtMSS(res.data);
          console.log("durchlaufzeit: " + this.durchlaufzeit);
        })
        .catch(err => console.log(err));
    },
    fmtMSS: function(s) {
      return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + Math.round(s);
    }
  },
  mounted() {
    this.getApiData();
  }
};
</script>

<style>
</style>
