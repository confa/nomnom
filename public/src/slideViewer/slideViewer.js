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
			this.on('prevClicked', this.goToPrevSlide);
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
		goToPrevSlide: function() {
			var deckName = this.get('deckName'),
				totalSlides = this.get('slideItems').getTotalSlides(),
				currentSlide = +this.get('currentSlide'),
				prev = (--currentSlide % (totalSlides + 1)) || totalSlides;

			this.router_.navigate('slide/' + deckName + '/' + prev);
			this.setCurrentSlide(prev);
		},
		goToNextSlide: function() {
			var deckName = this.get('deckName'),
				totalSlides = this.get('slideItems').getTotalSlides(),
				currentSlide = +this.get('currentSlide'),
				nextSlide = (++currentSlide % (totalSlides + 1)) || 1;

			this.router_.navigate('slide/' + deckName + '/' + nextSlide);
			this.setCurrentSlide(nextSlide);
		},
		adapt: [backboneAdaptor]
	});

	return Slide;
});