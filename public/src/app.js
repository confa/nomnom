require.config({
	paths: {
		ractive: '../bower_components/ractive/ractive-legacy.min',
		rv: '../bower_components/rv/rv',
		jquery: '../bower_components/jquery/dist/jquery.min',
		backbone: '../bower_components/backbone/backbone-min',
		underscore: '../bower_components/underscore/underscore-min',
		chartjs: '../bower_components/Chart.js/Chart.min',
		ractiveBackboneAdapter: '../bower_components/ractive-backbone/dist/ractive-adaptors-backbone.min',
		ractiveTransitionFly: '../bower_components/ractive-transitions-fly/dist/ractive-transitions-fly.umd'
	},
	name: 'main',
	stubModules: [ 'rv' ]
});

require([ 'ractive', 'backbone', 'app.router', 'dashboard/dashboard', 'chartjs'], function ( Ractive, Backbone, Router, Dashboard, Chart) {
	var router = new Router();
	Ractive.DEBUG = /unminified/.test(function(){/*unminified*/});
	Chart.defaults.global.responsive = true;
	if (!Backbone.history.start()) {
		router.navigate('/', {trigger: true});
	}
});