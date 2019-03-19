<template>
    <div id="finanzen">
        <h1>Finanzen</h1>
        <div class="row">
            <div class="col-5">
                <FinanzenChart/>
            </div>
        </div>
    </div>
</template>

<script>
    import FinanzenChart from '../charts/FinanzenChart';

    export default {
        name: 'finanzen',
        components: {
            FinanzenChart
        }
    }
</script>

<style>
</style>
