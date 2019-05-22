<template>
    <div>
        <h3>Reklamationsquote</h3>
        <p style="font-size: 55px; padding-left: 70px;">{{this.reklamationsquote}}</p>
    </div>
</template>

<script>
	import axios from "axios";

	export default {
		name: "Reklamationsquote",
		data() {
			return {
				reklamationsquote: ""
			};
		},
		methods: {
			getApiData: function () {
				axios
					.get("http://localhost:8080/infmapi/v1/complaints")
					.then(res => {
						this.reklamationsquote = res.data.toFixed(2);
					})
					.catch(err => console.log(err));
			}
		},
		mounted() {
			this.getApiData();
		}
	};
</script>

<style>
</style>
