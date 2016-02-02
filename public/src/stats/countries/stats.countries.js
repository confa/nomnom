define(['ractive', 'rv!stats/countries/stats.countries', 'ractiveBackboneAdapter', 'stats/countries/stats.countries.model', 'stats/countries/stats.countries.decorator'], 
	function (Ractive, statsCountriesTmpl, backboneAdaptor, CountriesModel, barChartDecorator) {
	'use strict';

	var StatsCountries = Ractive.extend({
		template: statsCountriesTmpl,
		oninit: function() {
			var model = new CountriesModel({deckName: this.get('deck')});
			this.set('countriesModel', model);
			this.observe('deck', this.deckChanged_);
		},
		decorators: {
			barChart: barChartDecorator
		},
		deckChanged_: function(newDeck) {
			var model = this.get('countriesModel');
			model.changeDeck(newDeck);
		},
		adaptors: [backboneAdaptor]
	});

	return StatsCountries;
});