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
