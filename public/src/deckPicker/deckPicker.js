define(['backbone', 'ractive', 'rv!deckPicker/deckPicker', 'ractiveBackboneAdapter', 'deckPicker/deckPicker.collection'], 
	function (Backbone, Ractive, deckPickerTmpl, backboneAdaptor, DeckPickerCollection) {
	'use strict';

	var DeckPicker = Ractive.extend({
		template: deckPickerTmpl,
		router_: new Backbone.Router(),
		data: {
			decks: DeckPickerCollection
		},
		oninit: function() {
			this.on('openBoard', this.openBoard);
		},
		openBoard: function(event, deckName) {
			this.router_.navigate('slide/' + deckName + '/1', {trigger: true});
		},
		adapt: [backboneAdaptor]
	});

	return DeckPicker;
});