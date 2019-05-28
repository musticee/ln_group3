<template>
  <div id="app">
    <Header/>
    <div class="container-fluid">
      <div class="row">
        <Navigation/>
        <div class="col-md-9 ml-sm-auto col-lg-10 mainContent">
          <div id="container">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default {
  name: "app",
  components: {
    Header,
    Navigation
  }
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
.mainContent {
  background-color: #eeeeee;
}
</style>