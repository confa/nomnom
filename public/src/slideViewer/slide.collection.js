define(['backbone', 'slideViewer/slide.model', 'slideViewer/slideType.enum'], function (Backbone, SlideModel, slideEnum) {
	'use strict';

	var SlideCollection = Backbone.Collection.extend({
		model: SlideModel,
		parse: function(response) {
			this.totalSlides_ = response.slides;
			return response.slide.map(this.adaptSlideItem_);
		},
		getTotalSlides: function() {
			return this.totalSlides_;
		},
		setCurrentDeck: function(name) {
			this.currentDeck_ = name;
		},
		adaptSlideItem_: function(slide) {
			if (slide.image) {
				return {
					type: slideEnum.IMAGE,
					value: slide.image
				};
			} else if (slide.para) {
				return {
					type: slideEnum.PARAGRAPH,
					value: slide.para
				};
			} else if (slide.heading) {
				return {
					type: slideEnum.HEADING,
					value: slide.heading
				};
			}
		},
		loadSlide: function(slideNum) {
			if (this.currentDeck_) {
				this.fetch({
					url: '/api/decks/' + this.currentDeck_ + '/slide/' + slideNum
				});
			}
		}
	});

	return SlideCollection;
});