var konkurrenzData = {
	labels: ["McDonalds", "Burger King", "Subway", "KFC"],
	datasets: [{
		label: "Marktanteil in %",
		backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
		data: [47, 20, 17, 16]
	}]
};
var konkurrenzDashboard = document.getElementById("konkurrenz").getContext('2d');
var konkurrenzDashboardChart = new Chart(konkurrenzDashboard, {
	type: 'pie',
	data: konkurrenzData
});
