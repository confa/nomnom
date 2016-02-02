require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		ractiveBackboneAdapter: {
			deps: [
				'backbone',
				'ractive'
			]
		}
	},
	paths: {
		ractive: '../bower_components/ractive/ractive-legacy.min',
		rv: '../bower_components/rv/rv',
		jquery: '../bower_components/jquery/dist/jquery.min',
		backbone: '../bower_components/backbone/backbone-min',
		underscore: '../bower_components/underscore/underscore-min',
		chartjs: '../bower_components/Chart.js/Chart.min',
		ractiveBackboneAdapter: '../bower_components/ractive-backbone/dist/ractive-adaptors-backbone.min'
	},
	name: 'main',
	stubModules: [ 'rv' ]
});

require([ 'ractive', 'backbone', 'app.router', 'dashboard/dashboard'], function ( Ractive, Backbone, Router, Dashboard) {
	var router = new Router();
	Ractive.DEBUG = /unminified/.test(function(){/*unminified*/});
	if (!Backbone.history.start()) {
		router.navigate('/', {trigger: true});
	}
});