<script>
    import { Doughnut } from "vue-chartjs";

    export default {
        extends: Doughnut,
        data() {
            return {
                datacollection: {
                    labels: ["Ist", "Soll"],
                    datasets: [
                        {
                            label: "Marktanteil in %",
                            backgroundColor: [
                                "#F4BD59",
                                "#EF7970"
                            ],
                            data: [40, 20]
                        }
                    ]
                },
                options: {
                    rotation: 1.14 * Math.PI,
                    circumference: 0.7*Math.PI,
                    cutoutPercentage:65,
                    legend: {
                        display: true
                    },
                    responsive: false,
                    maintainAspectRatio: false
                }
            };
        },
        mounted() {
            this.renderChart(this.datacollection, this.options);
        }
    };
</script>