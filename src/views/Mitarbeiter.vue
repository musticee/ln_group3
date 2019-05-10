<template>
    <div id="mitarbeiter">
        <h1>Mitarbeiter</h1>
        <div class="row">
            <div class="col-5">
                <MitarbeiterWrapper/>
            </div>
        </div>
    </div>
</template>

<script>

    import MitarbeiterWrapper from "../components/MitarbeiterWrapper";
    export default {
        name: 'mitarbeiter',
        components: {
            MitarbeiterWrapper
        }
    }
</script>

<style>
</style>
