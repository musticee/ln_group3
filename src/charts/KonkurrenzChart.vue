<script>
	import {Pie} from "vue-chartjs";
	import axios from "axios";

	export default {
		extends: Pie,
		data: function () {
			return {
				mcData: 0,
				apiData: [],
				datacollection: {
					labels: [],
					datasets: [
						{
							label: "Marktanteil in %",
							backgroundColor: ["#F4BD59", "#5CC8F2", "#EF7970", "#8e5ea2"],
							data: []
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
					total += this.apiData[x].revenue;
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
					labels.push(this.apiData[x].company);
					data.push(100/ totalUmsatz * this.apiData[x].revenue);
				}
				this.datacollection.labels= labels;
				this.datacollection.datasets[0].data = data;
			},
			getApiData: function() {
				axios
					.get("http://localhost:8080/infmapi/v1/competitors")
					.then(res => {
						this.apiData = res.data;
						this.getMCData();
					})
					.catch(err => console.log(err));
			},
			getMCData: function () {
				axios
					.get("http://localhost:8080/infmapi/v1/revenue")
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
		}
	};
</script>