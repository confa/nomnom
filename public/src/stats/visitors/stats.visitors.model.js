define(['stats/stats.base.model'], function (StatsBaseModel) {
	'use strict';

	var StatsVisitorsModel = StatsBaseModel.extend({
		url: function() {
			var deckName = this.get('deckName');
			return '/api/decks/' + deckName + '/stats/visitors';
		}
	});

	return StatsVisitorsModel;
});