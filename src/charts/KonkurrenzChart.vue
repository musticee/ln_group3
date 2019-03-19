<script>
    import { Pie } from 'vue-chartjs';

    export default {
        extends: Pie,
        data() {
            return {
                datacollection: {
                    labels: ["McDonalds", "Burger King", "Subway", "KFC"],
                    datasets: [{
                        label: "Marktanteil in %",
                        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                        data: [47, 20, 17, 16]
                    }]
                },
                options: {

                    legend: {
                        display: true
                    },
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        },
        mounted() {
            this.renderChart(this.datacollection, this.options)
        }
    }
</script>