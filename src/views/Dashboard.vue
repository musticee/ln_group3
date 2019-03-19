<template>
  <div id="dashboard">
    <h1>Dashboard</h1>


    <div class="row">
      <div class="col-6">
        <h2>Umsatz / Gewinn </h2>
        <FinanzenChart/>
      </div>
      <div class="col-6">
        <h2>Mitarbeiteranzahl/Fluktuation </h2>
        <MitarbeiterChart/>
      </div>
      <div class="col-6">
        <h2>Kunden</h2>
      </div>
      <div class="col-6">
        <h2>Marktanteil</h2>
        <KonkurrenzChart/>
      </div>
    </div>


  </div>
</template>

<script>
    import FinanzenChart from '../charts/FinanzenChart'
    import MitarbeiterChart from '../charts/MitarbeiterChart'
    import KonkurrenzChart from '../charts/KonkurrenzChart'

    export default {
        name: 'dashboard',
        components: {
        FinanzenChart,
        MitarbeiterChart,
        KonkurrenzChart
        }
    }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>

