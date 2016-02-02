define(['ractive', 'rv!stats/visitors/stats.visitors', 'ractiveBackboneAdapter', 'stats/visitors/stats.visitors.model'], 
	function (Ractive, statsVisitorsTmpl, backboneAdaptor, VisitorsModel) {
	'use strict';

	var StatsVisitors = Ractive.extend({
		template: statsVisitorsTmpl,
		oninit: function() {
			var model = new VisitorsModel({deckName: this.get('deck')});
			this.set('visitorsModel', model);
			this.observe('deck', this.deckChanged_);
		},
		deckChanged_: function(newDeck) {
			var model = this.get('visitorsModel');
			model.changeDeck(newDeck);
		},
		adaptors: [backboneAdaptor]
	});

	return StatsVisitors;
});