define(['chartjs'], function(Chart) {
	var barChartDecorator = function (node, countriesData) {
		var ctx = node.getContext('2d');
		var data = {
			labels: countriesData.map(function(item) {
				return item.country;
			}),
			datasets: [
				{
					label: 'Countries Stats',
					fillColor: '#B8B8B8',
					strokeColor: '#B8B8B8',
					pointHighlightStroke: 'rgba(220,220,220,1)',
					data: countriesData.map(function(item) {
						return item.value;
					})
				}
			]
		};
		var barChart = new Chart(ctx).Bar(data, {
			barDatasetSpacing : 5,
			barValueSpacing : 40,
			scaleShowHorizontalLines: false
		});
		return {
			teardown: function () {
				barChart.destroy();
			}
		};
	};

	return barChartDecorator;
});