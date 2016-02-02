define(['backbone', 'deckPicker/deckPicker', 'slideViewer/slideViewer'], 
	function(Backbone, DeckPicker, SlideViewer) {
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
			index = +index || 1;
			this.currentView_ = new SlideViewer({
				el: '#container',
				currentSlide: index
			});
			this.currentView_.set('deckName', name);
		},
		stats: function(name) {	
		}
	});
	return Router;
});