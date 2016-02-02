define(['chartjs'], function(Chart) {
	var lineChartDecorator = function (node, visitorsData) {
		var ctx = node.getContext("2d");
		var data = {
			labels: visitorsData.map(function(item) {
				var date = new Date(item.timestamp);
				return date.getDate() + ' ' + (date.getMonth() + 1) + ' ' + date.getFullYear();
			}),
			datasets: [
				{
					label: "Visitors Stats",
					fillColor: "rgba(220,220,220,0.2)",
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: visitorsData.map(function(item) {
						return item.value;
					})
				}
			]
		};
		var lineChart = new Chart(ctx).Line(data, {});
		return {
			teardown: function () {
				lineChart.destroy();
			}
		};
	};

	return lineChartDecorator;
});