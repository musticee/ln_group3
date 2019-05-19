<script>
import { Pie } from "vue-chartjs";
import axios from "axios";

export default {
  extends: Pie,
	data: function () {
		return {
			mcData: 0,
			apiData: [
				{konkurrenzId: 2, unternehmen: "BurgerKing", umsatz: 45000000},
				{konkurrenzId: 3, unternehmen: "Migros", umsatz: 350000000},
				{konkurrenzId: 4, unternehmen: "Holy Cow", umsatz: 6000000}
			],
			datacollection: {
				labels: ["McDonalds", "Burger King", "Subway", "KFC"],
				datasets: [
					{
						label: "Marktanteil in %",
						backgroundColor: ["#F4BD59", "#5CC8F2", "#EF7970", "#8e5ea2"],
						data: [47, 20, 17, 16]
					}
				]
			},
			options: {
				legend: {
					display: true
				},
				responsive: false,
				maintainAspectRatio: false
			}
		};
	},
  methods: {
    getTotalUmsatz: function() {
      var total=0;
      for(var x in this.apiData){
        total += this.apiData[x].umsatz;
      }
      return total;
    },
    setApiData: function(){
      var labels = [];
      var data = [];
      var totalUmsatz = this.getTotalUmsatz();

      labels.push("McDonald's");
      data.push(100/ totalUmsatz * this.mcData);
      for(var x in this.apiData){
        labels.push(this.apiData[x].unternehmen);
        data.push(100/ totalUmsatz * this.apiData[x].umsatz);
      }
      this.datacollection.labels= labels;
      this.datacollection.datasets[0].data = data;
    },
    getApiData: function() {
      axios
        .get("http://localhost:8080/infmapi/v1/konkurrenz")
        .then(res => {
          this.apiData = res.data;
        })
        .catch(err => console.log(err));
    },
    getMCData: function () {
      axios
          .get("http://localhost:8080/infmapi/v1/umsatz")
          .then(res => {
          	this.mcData = res.data;
			this.setApiData();
			this.renderChart(this.datacollection, this.options);
          })
          .catch(err => console.log(err));
	}
  },
  mounted() {
    this.getApiData();
    this.getMCData();
  }
};
</script>