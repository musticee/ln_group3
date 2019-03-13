/* Navigation */
const Dashboard = { template: '<div>Dashboard</div>' }
const Finanzen = { template: '<div>Finanzen</div>' }
const Mitarbeiter = { template: '<div>Mitarbeiter</div>' }
const Kunden = { template: '<div>Kunden</div>' }
const Konkurrenz = { template: '<div>Konkurrenz</div>' }

const routes = [
  { path: '/', component: Dashboard },
  { path: '/dashboard', component: Dashboard },
  { path: '/finanzen', component: Finanzen },
  { path: '/mitarbeiter', component: Mitarbeiter },
  { path: '/kunden', component: Kunden },
  { path: '/konkurrenz', component: Konkurrenz }
]
const router = new VueRouter({
  routes
})
const app = new Vue({
  router
}).$mount('#app')

var ctx = document.getElementById("finanzen").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
