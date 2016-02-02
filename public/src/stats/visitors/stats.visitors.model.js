define(['stats/stats.base.model'], function (StatsBaseModel) {
	'use strict';

	var StatsVisitorsModel = StatsBaseModel.extend({
		defaults: {
			deckName: '',
			stats: []
		},
		changeDeck: function(newDeck) {
			this.set('deckName', newDeck);
			this.fetch();
		},
		parse: function(response) {
			return {
				stats: response
			};
		},
		url: function() {
			var deckName = this.get('deckName');
			return '/api/decks/' + deckName + '/stats/visitors';
		}
	});

	return StatsVisitorsModel;
});