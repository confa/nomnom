define(['backbone'], function (Backbone) {
	'use strict';

	var SlideModel = Backbone.Model.extend({
		defaults: {
			type: '',
			value: ''
		}
	});

	return SlideModel;
});