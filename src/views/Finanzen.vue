<template>
    <div id="finanzen">
        <h1>Finanzen</h1>
        <div class="row">
            <div class="col-5">
                <FinanzenChart/>
            </div>
        </div>
        <h1>Ist Soll</h1>
        <div class="row">
            <div class="col-5">
                <IstSollChart/>
            </div>
        </div>
    </div>
</template>

<script>
    import FinanzenChart from '../charts/FinanzenChart';
    import IstSollChart from '../charts/IstSollChart';

    export default {
        name: 'finanzen',
        components: {
            FinanzenChart,
            IstSollChart
        }
    }
</script>

<style>
</style>
