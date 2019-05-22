<template>
    <div id="kunden">
        <div class="row smileyRow">
            <div class="col-md-2">
                <p class="smiley grin">
                    <font-awesome-icon class="fa-icon fa-5x" icon="grin"/>
                </p>
                <p class="percent">{{smileys[5]}}%</p>
            </div>
            <div class="col-md-2">
                <p class="smiley smile">
                    <font-awesome-icon class="fa-icon fa-5x" icon="smile"/>
                </p>
                <p class="percent">{{smileys[4]}}%</p>
            </div>
            <div class="col-md-2">
                <p class="smiley meh">
                    <font-awesome-icon class="fa-icon fa-5x" icon="meh"/>
                </p>
                <p class="percent">{{smileys[3]}}%</p>
            </div>
            <div class="col-md-2">
                <p class="smiley frown">
                    <font-awesome-icon class="fa-icon fa-5x" icon="frown"/>
                </p>
                <p class="percent">{{smileys[2]}}%</p>
            </div>
            <div class="col-md-2">
                <p class="smiley angry">
                    <font-awesome-icon class="fa-icon fa-5x" icon="angry"/>
                </p>
                <p class="percent">{{smileys[1]}}%</p>
            </div>
        </div>
    </div>
</template>

<script>
	import axios from "axios";

	export default {
		name: "kunden",
		components: {},
		data() {
			return {
				apiData: {
					"1": 4,
					"2": 1,
					"3": 6,
					"4": 8,
					"5": 12
				},
				smileys: {
					"1": 0,
					"2": 0,
					"3": 0,
					"4": 0,
					"5": 0
				}
			};
		},
		methods: {
			getTotal: function () {
				var total = 0;

				for (var x in Object.values(this.apiData)) {
					total += Object.values(this.apiData)[x];
				}
				return total;
			},
			getApiData: function () {
				axios
					.get("http://localhost:8080/infmapi/v1/satisfaction")
					.then(res => {
						this.apiData = res.data;
						this.setApiData()
					})
					.catch(err => console.log(err));
			},
			setApiData: function () {
				var total = this.getTotal();
				for (var i = 1; i <= 5; i++) {
					var numAsString = i.toString();
					this.smileys[numAsString] = Math.round(100 / total * this.apiData[numAsString]);
				}
			}
		}
		,
		mounted() {
			this.getApiData();
		}
	}
	;
</script>

<style>
    .smileyRow {
        text-align: center;
        font-size: 16px;
    }

    .grin {
        color: #7bcc6c;
    }

    .smile {
        color: #bcff77;
    }

    .meh {
        color: #f4bd59;
    }

    .frown {
        color: #f2a378;
    }

    .angry {
        color: #ef7970;
    }

    .percent {
        font-weight: bold;
    }
</style>
