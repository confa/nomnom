define(['ractive', 'rv!stats/stats', 'stats/countries/stats.countries', 'stats/visitors/stats.visitors'], 
	function (Ractive, statsTmpl, Countries, Visitors) {
	'use strict';

	var Stats = Ractive.extend({
		template: statsTmpl,
		components: {
			Visitors: Visitors,
			Countries: Countries
		}
	});

	return Stats;
});