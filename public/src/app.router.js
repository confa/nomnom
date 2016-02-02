define(['backbone', 'deckPicker/deckPicker'], 
	function(Backbone, DeckPicker) {
	var Router = Backbone.Router.extend({
		currentView_: null,
		routes: {
			'':                     'root',
			'slide/:name(/:index)': 'slide',
			'stats/:name':          'stats'
		},
		root: function() {
			this.currentView_ = new DeckPicker({
				el: '#container'
			});
		},
		slide: function(name, index) {
		},
		stats: function(name) {	
		}
	});
	return Router;
});