<template>
    <div id="mitarbeiter">
        <h1>Mitarbeiter</h1>
        <div class="row">
            <div class="col-5">
                <MitarbeiterChart/>
            </div>
        </div>
    </div>
</template>

<script>

    import MitarbeiterChart from "../charts/MitarbeiterChart";
    export default {
        name: 'mitarbeiter',
        components: {
            MitarbeiterChart
        }
    }
</script>

<style>
</style>
