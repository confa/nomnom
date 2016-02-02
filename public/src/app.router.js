define(['backbone'], 
	function(Backbone) {
	var Router = Backbone.Router.extend({
		currentView_: null,
		routes: {
			'':                     'root',
			'slide/:name(/:index)': 'slide',
			'stats/:name':          'stats'
		},
		root: function() {
		},
		slide: function(name, index) {
		},
		stats: function(name) {	
		}
	});
	return Router;
});