<template>
  <div id="app">
    <Header/>
    <div class="container-fluid">
      <div class="row">
        <Navigation/>
        <div class="col-md-9 ml-sm-auto col-lg-10 mainContent">
          <div id="container">
            <router-view v-bind:albums="albums"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import Navigation from "./components/Navigation";
  import axios from "axios";
  export default {
    name: "app",
    components: {
      Header,
      Navigation
    },
    data() {
      return {
        albums: []
      };
    },
    methods: {
      logAlbums: function() {
        this.albums.forEach(function(arrayItem) {
          var x = arrayItem.title + 2;
          console.log(x);
        });
      }
    },
    created() {
      axios
              .get("https://jsonplaceholder.typicode.com/albums?_limit=5")
              .then(res => {
                this.albums = res.data;
                //this.logAlbums();
              })
              .catch(err => console.log(err));
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