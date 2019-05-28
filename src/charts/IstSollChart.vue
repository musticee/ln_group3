<script>
	import {Doughnut} from "vue-chartjs";
	import axios from "axios";

	export default {
		extends: Doughnut,
		data() {
			return {
				datacollection: {
					labels: ["Ist", "Verbleibend"],
					datasets: [
						{
							backgroundColor: [
								"#F4BD59",
								"#EF7970"
							],
							data: []
						}
					]
				},
				options: {
					rotation: 1.14 * Math.PI,
					circumference: 0.7 * Math.PI,
					cutoutPercentage: 65,
					legend: {
						display: true
					},
					responsive: false,
					maintainAspectRatio: false
				}
			};
		},
		methods: {
			renderDoghnutChart: function() {
				this.renderChart(this.datacollection, this.options);
			},
			getApiData: function () {
				axios
					.get("http://localhost:8080/infmapi/v1/revenue")
					.then(res => {
						this.datacollection.datasets[0].data[0] = res.data;
					})
					.catch(err => console.log(err));
				axios
					.get("http://localhost:8080/infmapi/v1/objectives/Umsatz")
					.then(res => {
						this.datacollection.datasets[0].data[1] = (res.data[2019][0].objective + res.data[2019][1].objective + res.data[2019][2].objective + res.data[2019][3].objective) - this.datacollection.datasets[0].data[0];
					    this.renderDoghnutChart();
					})
					.catch(err => console.log(err));
			}
		},
		mounted() {
			this.getApiData();
		}
	};
</script>