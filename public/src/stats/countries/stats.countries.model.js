define(['stats/stats.base.model'], function (StatsBaseModel) {
	'use strict';

	var StatsCountriesModel = StatsBaseModel.extend({
		url: function() {
			var deckName = this.get('deckName');
			return '/api/decks/' + deckName + '/stats/countries';
		}
	});

	return StatsCountriesModel;
});