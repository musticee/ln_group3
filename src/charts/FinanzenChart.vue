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
                },
                //Chart.js options that controls the appearance of the chart
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            gridLines: {
                                display: true
                            }
                        }],
                        xAxes: [{
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