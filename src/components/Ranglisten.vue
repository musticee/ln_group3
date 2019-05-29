<template>
  <div class="row">
    <div class="col-6">
    <table class="table" >
      <thead class="thead-dark">
        <tr>
          <th>Filiale</th>
          <th>Umsatz</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in stores" v-bind:key="row">
          <td v-for="(col, i) in columnsStore" v-bind:key="i">{{row[col]}}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="col-6">
    <table class="table" >
      <thead class="thead-dark">
        <tr>
          <th>Produkt</th>
          <th>Bestellungen</th>
          <th>Umsatz</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in products" v-bind:key="row">
          <td v-for="(col, i) in columnsProduct" v-bind:key="i">{{row[col]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
  name: "Ranglisten",
  data() {
    return {
      stores: [{"store":"Löwenplatz","revenue":4.861203359999998E7},{"store":"Stauffacher","revenue":9432506.500000002},{"store":"Bundesplatz","revenue":5161003.3},{"store":"Alstadt","revenue":2880501.9},{"store":"Zentrum","revenue":3581002.8}],
      products: [{"product":"BigMac","amountOfOrders":35,"revenue":2.10000175E7},{"product":"BigTasty","amountOfOrders":34,"revenue":2.38170306E7},{"product":"McNuggets x6","amountOfOrders":25,"revenue":1.475E7},{"product":"McFlurry","amountOfOrders":25,"revenue":9750000.0},{"product":"Cappuccino","amountOfOrders":1,"revenue":350000.0}]
            
    };
  },
  computed: {
    "columnsStore": function columns() {
      if (this.stores.length == 0) {
        return [];
      }
      return Object.keys(this.stores[0])
    },
    "columnsProduct": function columns() {
      if (this.products.length == 0) {
        return [];
      }
      return Object.keys(this.products[0])
    }
    },
    methods: {
    getApiData: function() {
      axios
        .get("http://localhost:8080/infmapi/v1/ranking/product")
        .then(res => {
          this.products = res.data;
        })
        .catch(err => console.log(err));

        axios
        .get("http://localhost:8080/infmapi/v1/ranking/store")
        .then(res => {
          this.stores = res.data;
        })
        .catch(err => console.log(err));
    },
    
    formatNumbers: function() {
       for (var x in this.stores) {
            this.stores[x].revenue = this.stores[x].revenue.toFixed(2); 
     }   
        for (var x in this.products) {
            this.products[x].revenue = this.products[x].revenue.toFixed(2); 
     }   
    },
  },
  mounted() {
    this.getApiData();
    this.formatNumbers();
  }
  };
  </script scoped>
  <style>
    .table {
        font-size: 13px;
    }
  </style>
  