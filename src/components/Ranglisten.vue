<template>
  <div class="row">
    <div class="col-6">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>Filiale</th>
            <th>Umsatz in CHF</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in stores" v-bind:key="row.store">
            <td v-for="col in columnsStore" v-bind:key="col.id">{{row[col]}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-6">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>Produkt</th>
            <th>Bestellungen</th>
            <th>Umsatz in CHF</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in products" v-bind:key="row.product">
            <td v-for="col in columnsProduct" v-bind:key="col.id">{{row[col]}}</td>
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
      stores: [],
      products: []
    };
  },
  computed: {
    columnsStore: function columns() {
      if (this.stores.length == 0) {
        return [];
      }
      return Object.keys(this.stores[0]);
    },
    columnsProduct: function columns() {
      if (this.products.length == 0) {
        return [];
      }
      return Object.keys(this.products[0]);
    }
  },
  methods: {
    getApiData: function() {
      axios
        .get("http://localhost:8080/infmapi/v1/ranking/product")
        .then(res => {
          this.products = res.data;

          axios
            .get("http://localhost:8080/infmapi/v1/ranking/store")
            .then(res => {
              this.stores = res.data;
              this.formatNumbers();
            })
            .catch(err => console.log(err));
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
    }
  },
  mounted() {
    this.getApiData();
  }
};
</script scoped>
  <style>
.table {
  font-size: 13px;
}
</style>
  