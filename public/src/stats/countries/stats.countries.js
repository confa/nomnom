define(['ractive', 'rv!stats/countries/stats.countries', 'ractiveBackboneAdapter', 'stats/countries/stats.countries.model'], 
	function (Ractive, statsCountriesTmpl, backboneAdaptor, CountriesModel) {
	'use strict';

	var StatsCountries = Ractive.extend({
		template: statsCountriesTmpl,
		oninit: function() {
			var model = new CountriesModel({deckName: this.get('deck')});
			this.set('countriesModel', model);
			this.observe('deck', this.deckChanged_);
		},
		deckChanged_: function(newDeck) {
			var model = this.get('countriesModel');
			model.changeDeck(newDeck);
		},
		adaptors: [backboneAdaptor]
	});

	return StatsCountries;
});