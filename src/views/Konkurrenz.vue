<template>
    <div id="konkurrenz">
        <h1>Konkurrenz</h1>
        <div class="row">
            <div class="col-5">
                <KonkurrenzChart/>
            </div>
        </div>
    </div>
</template>

<script>

    import KonkurrenzChart from '../charts/KonkurrenzChart';

    export default {
        name: 'konkurrenz',
        components: {
            KonkurrenzChart

        }
    }
</script>

<style>
</style>
