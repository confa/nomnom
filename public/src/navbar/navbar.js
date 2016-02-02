define(['ractive', 'rv!navbar/navbar'], function (Ractive, navbarTmpl) {
	'use strict';

	var Navbar = Ractive.extend({
		template: navbarTmpl
	});

	return Navbar;
});