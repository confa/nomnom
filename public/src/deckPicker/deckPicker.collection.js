define(['backbone', 'deckPicker/deckPicker.model'], function (Backbone, DeckPickerModel) {
	'use strict';

	var DeckPickerCollection = Backbone.Collection.extend({
		url: '/api/decks',
		model: DeckPickerModel,
		parse: function(response) {
			return response.decks.map(function(item) {
				return {
					name: item
				};
			});
		},
		initialize: function() {
			this.fetch();
		}
	});

	return new DeckPickerCollection();
});