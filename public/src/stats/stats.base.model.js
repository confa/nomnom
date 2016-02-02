define(['backbone'], function (Backbone) {
	'use strict';

	var StatsBaseModel = Backbone.Model.extend({
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
		}
	});

	return StatsBaseModel;
});