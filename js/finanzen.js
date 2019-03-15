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