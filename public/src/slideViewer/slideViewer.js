define(['ractive', 'rv!slideViewer/slideViewer', 'ractiveBackboneAdapter', 'slideViewer/slide.collection', 'slideViewer/slideType.enum', 'backbone'], 
	function (Ractive, slideViewerTmpl, backboneAdaptor, SlideCollection, slideEnum, Backbone) {
	'use strict';

	var Slide = Ractive.extend({
		template: slideViewerTmpl,
		router_: new Backbone.Router(),
		data: {
			slideItems: new SlideCollection(),
			slideTypes: slideEnum
		},
		oninit: function() {
			this.set('currentSlide', this.currentSlide || 1);
			this.on('nextClicked', this.goToNextSlide);
			this.observe('deckName', this.setCurrentDeck);
		},
		setCurrentDeck: function(currentDeck) {
			var slideCollection = this.get('slideItems');
			slideCollection.setCurrentDeck(currentDeck);
			this.setCurrentSlide(this.currentSlide);
		},
		setCurrentSlide: function(index) {
			var slideCollection = this.get('slideItems');
			this.set('currentSlide', index);
			slideCollection.loadSlide(index);
		},
		goToNextSlide: function() {
			var deckName = this.get('deckName'),
				totalSlides = this.get('slideItems').getTotalSlides(),
				currentSlide = +this.get('currentSlide'),
				nextSlide = (++currentSlide % (totalSlides + 1)) || 1;

			this.set('currentSlide', nextSlide);
			this.router_.navigate('slide/' + deckName + '/' + nextSlide);
			this.setCurrentSlide(nextSlide);
		},
		adapt: [backboneAdaptor]
	});

	return Slide;
});