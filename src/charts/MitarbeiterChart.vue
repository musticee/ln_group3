<script>
    import { Bar } from 'vue-chartjs';

    export default {
        extends: Bar,
        data() {
            return {
                datacollection: {
                    //Data to be represented on x-axis
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
                },
                //Chart.js options that controls the appearance of the chart
                options: {
                    scales: {
                        yAxes: [{
                            stacked: true,
                            ticks: {
                                beginAtZero: true
                            },
                            gridLines: {
                                display: true
                            }
                        }],
                        xAxes: [{
                            stacked: true,
                            gridLines: {
                                display: false
                            }
                        }]
                    },
                    legend: {
                        display: true
                    },
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        },
        mounted() {
            //renderChart function renders the chart with the datacollection and options object.
            this.renderChart(this.datacollection, this.options)
        }
    }
</script>