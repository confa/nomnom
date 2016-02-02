define(['backbone'], function (Backbone) {
	'use strict';

	var DeckPickerModel = Backbone.Model.extend({
		defaults: {
			name: ''
		}
	});

	return DeckPickerModel;
});