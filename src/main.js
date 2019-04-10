import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

import { faGrin } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { faMeh } from "@fortawesome/free-solid-svg-icons";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import { faAngry } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/**** FONTAWESOME ****/
library.add(faCoffee);
library.add(faUser);
library.add(faTachometerAlt);
library.add(faUsers);
library.add(faGlobeAmericas);
library.add(faAddressCard);
library.add(faChartLine);
library.add(faFileAlt);

library.add(faGrin);
library.add(faSmile);
library.add(faMeh);
library.add(faFrown);
library.add(faAngry);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  /*data: {
    dataChart: [10, 39, 10]
  },
    methods: {
        changeData: function() {
            this.dataChart = [10, 2, 15];
            console.log("data: "+this.dataChart);
        }
    },*/
  router,
  render: h => h(App)
}).$mount("#app");
