define(['chartjs'], function(Chart) {
	var barChartDecorator = function (node, countriesData) {
		var ctx = node.getContext("2d");
		var data = {
			labels: countriesData.map(function(item) {
				return item.country;
			}),
			datasets: [
				{
					label: "Countries Stats",
					fillColor: "rgba(220,220,220,0.2)",
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: countriesData.map(function(item) {
						return item.value;
					})
				}
			]
		};
		var barChart = new Chart(ctx).Bar(data, {});
		return {
			teardown: function () {
				barChart.destroy();
			}
		};
	};

	return barChartDecorator;
});