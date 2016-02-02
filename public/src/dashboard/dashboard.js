define(['backbone', 'ractive', 'rv!dashboard/dashboard', 'navbar/navbar'], 
	function (Backbone, Ractive, dashboardTmpl, Navbar) {
	'use strict';

	var Dashboard = Ractive.extend({
		el: '#main',
		template: dashboardTmpl,
		data: {
			deckName: ''
		},
		setCurrentDeck: function(currentDeck) {
			this.set('deckName', currentDeck);
		},
		setCurrentRoute: function(route) {
			this.set('route', route);
		},
		components: {
			Navbar: Navbar
		}
	});

	return new Dashboard();
});