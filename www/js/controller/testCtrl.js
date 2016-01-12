(function() {
	'use strict';

	angular
		.module('app')
		.controller('testCtrl', testCtrl);

	testCtrl.$inject = ['$location'];

	function testCtrl($location) {
		var ctrl = this;
		ctrl.ok = "It's work :D";
		console.log($location);
	}

})();