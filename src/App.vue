<template>
  <div id="app">
    <Header/>
    <Navigation/>
    <router-view/>
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
</style>