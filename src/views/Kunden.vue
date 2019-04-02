<template>
  <div id="kunden">
    <div class="row smileyRow">
      <div class="col-md-2"><p class="smiley grin"><font-awesome-icon class="fa-icon fa-5x" icon="grin"/></p><p class="percent">70%</p></div>
      <div class="col-md-2"><p class="smiley smile"><font-awesome-icon class="fa-icon fa-5x" icon="smile"/></p><p class="percent">10%</p></div>
      <div class="col-md-2"><p class="smiley meh"><font-awesome-icon class="fa-icon fa-5x" icon="meh"/></p><p class="percent">8%</p></div>
      <div class="col-md-2"><p class="smiley frown"><font-awesome-icon class="fa-icon fa-5x" icon="frown"/></p><p class="percent">5%</p></div>
      <div class="col-md-2"><p class="smiley angry"><font-awesome-icon class="fa-icon fa-5x" icon="angry"/></p><p class="percent">7%</p></div>

      <!--<div class="col-sm-7">
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
            <p style="font-size: 55px; font-weight: bold;">7 Minuten</p>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "kunden",
  components: {}
};
</script>

<style>
  .smileyRow {
    text-align: center;
    font-size:16px;
  }
  .grin{
    color: #7BCC6C;
  }
  .smile{
    color: #BCFF77;
  }
  .meh{
    color: #F4BD59;
  }
  .frown{
    color: #F2A378;
  }
  .angry{
    color: #EF7970;
  }
  .percent {
    font-weight: bold;
  }
</style>
