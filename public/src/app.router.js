define(['backbone', 'dashboard/dashboard', 'deckPicker/deckPicker', 'slideViewer/slideViewer', 'stats/stats'], 
	function(Backbone, Dashboard, DeckPicker, SlideViewer, Stats) {
	var Router = Backbone.Router.extend({
		currentView_: null,
		routes: {
			'':                     'root',
			'slide/:name(/:index)': 'slide',
			'stats/:name':          'stats'
		},
		initialize: function () {
			this.on('route', function(name) {
				Dashboard.setCurrentRoute(name);
			});
		},
		root: function() {
			this.currentView_ = new DeckPicker({
				el: '#container'
			});
		},
		slide: function(name, index) {
			index = +index || 1;
			this.currentView_ = new SlideViewer({
				el: '#container',
				currentSlide: index
			});
			this.currentView_.set('deckName', name);
			Dashboard.setCurrentDeck(name);
		},
		stats: function(name) {
			this.currentView_ = new Stats({
				el: '#container'
			});	
			this.currentView_.set('deckName', name);
			Dashboard.setCurrentDeck(name);
		}
	});
	return Router;
});