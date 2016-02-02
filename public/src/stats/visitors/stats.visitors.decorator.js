define(['chartjs'], function(Chart) {
	var monthArray = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT','NOV', 'DEC'];
	var lineChartDecorator = function (node, visitorsData) {
		var ctx = node.getContext('2d');
		var data = {
			labels: visitorsData.map(function(item) {
				return formatDate(item.timestamp);
			}),
			datasets: [
				{
					label: 'Visitors Stats',
					fillColor: 'transparent',
					strokeColor: '#8EACF8',
					pointColor: '#8EACF8',
					pointStrokeColor: '#fff',
					pointHighlightFill: '#fff',
					pointHighlightStroke: 'rgba(220,220,220,1)',
					data: visitorsData.map(function(item) {
						return item.value;
					})
				}
			]
		};
		var lineChart = new Chart(ctx).Line(data, {
			bezierCurve: false,
			scaleShowVerticalLines: false,
			pointHitDetectionRadius: 5
		});
		return {
			teardown: function () {
				lineChart.destroy();
			}
		};
	};

	function formatDate(timestamp) {
		var date = new Date(timestamp);
		return date.getDate() + ' ' + getReadableMonth(date.getMonth()) + ' ' + date.getFullYear();
	}

	function getReadableMonth(monthIndex) {
		return monthArray[monthIndex];
	}

	return lineChartDecorator;
});