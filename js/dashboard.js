var umsatzGewinnData = {
	labels: ["2016", "2017", "2018", "2019"],
	datasets: [{
		label: 'Umsatz in Mio CHF',
		backgroundColor: '#b3c3c2',
		stack: 'Stack 0',
		data: [40, 50, 52, 56]
	}, {
		label: 'Gewinn in Mio CHF',
		backgroundColor: '#42ba59',
		stack: 'Stack 1',
		data: [20, 30, 32, 36]
	}]
};
var umsatzGewinnDashboard = document.getElementById("umsatzGewinn").getContext('2d');
var umsatzGewinnDashboardChart = new Chart(umsatzGewinnDashboard, {
	type: 'bar',
	data: umsatzGewinnData
});

var fluktuationsData = {
	labels: ["2016", "2017", "2018", "2019"],
	datasets: [{
		label: 'Mitarbeiterfluktuation',
		backgroundColor: '#ff3800',
		data: [500, 600, 720, 560]
	}, {
		label: 'Mitarbeiteranzahl',
		backgroundColor: '#e6ffd8',
		data: [4000, 4200, 4300, 4100]
	}]
};
var fluktuationDashboard = document.getElementById("fluktuation").getContext('2d');
var fluktuationDashboardChart = new Chart(fluktuationDashboard, {
	type: 'bar',
	data: fluktuationsData,
	options: {
		scales: {
			xAxes: [{
				stacked: true,
			}],
			yAxes: [{
				stacked: true
			}]
		}
	}
});

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
