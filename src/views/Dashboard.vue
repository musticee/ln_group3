<template>
    <div>
        <div class="row">
            <div class="col-lg-4 col-sm-12 chardDiv">
                <span class="h2">Umsatz&nbsp;&nbsp;</span>
                <Customswitch/>
                <span class="h2">&nbsp;&nbsp;Gewinn</span>
                <FinanzenChart :width="360" :height="220"/>

                <div class="row">
                    <div class="col-md-6">
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected>Pro Jahr</option>
                            <option value="1">Pro Monat</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <select class="custom-select" id="inputGroupSelect02">
                            <option selected>Pro Gast</option>
                            <option value="1">Pro Mitarbeiter</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-12 chardDiv">
                <h2>Ist-Soll (Total)</h2>
                <img src="../assets/img/ist_soll.png" alt="Ist-Soll" height="220">
            </div>
            <div class="col-lg-5 col-sm-12 chardDiv">
                <h2>Mitarbeiterfluktuationsquote</h2>
                <MitarbeiterChart :width="360" :height="220"/>
                <div class="row">
                    <div class="col-md-5">
                        <select class="custom-select" id="inputGroupSelect03">
                            <option selected>Pro Jahr</option>
                            <option value="1">Pro Monat</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-7 chardDiv">
                <span class="glyphicon glyphicon-user" aria-hidden="true"></span><h2>Kundenzufriedenheit</h2>
                <div class="row">
                    <div class="col-12">
                        <img src="../assets/img/smileys.png" alt="Ist-Soll" height="170">
                    </div>
                    <div class="col-6">
                        <h3>Reklamationsquote</h3>
                        <p style="font-size: 55px; padding-left: 70px; font-weight: bold;">9.6%</p>
                    </div>
                    <div class="col-6">
                        <h3>Durchlaufszeit</h3>
                        <!-- <select class="custom-select" id="durchlaufzeitProdukt">
                            <option>burger</option>
                        </select> -->
                        <p style="font-size: 55px; font-weight: bold;">7 Minuten</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-5 chardDiv">
                <h2>Marktanteil</h2>
                <KonkurrenzChart :width="360" :height="220"/>
            </div>
        </div>
    </div>
</template>

<script>
    import FinanzenChart from "../charts/FinanzenChart";
    import MitarbeiterChart from "../charts/MitarbeiterChart";
    import KonkurrenzChart from "../charts/KonkurrenzChart";
    import Customswitch from "../components/Customswitch";

    export default {
        name: "dashboard",
        components: {
            FinanzenChart,
            MitarbeiterChart,
            KonkurrenzChart,
            Customswitch
        }
    };
</script>

<style>
    body {
        font-family: Arial, Helvetica, sans-serif;
    }

    /*canvas {
      height: 250px;
      width: 500px;
    }*/
    .chardDiv {
        padding: 25px;
    }

    select#durchlaufzeitProdukt option[value="burger"] {
        background-image: url(../assets/img/burger.png);
    }
</style>

