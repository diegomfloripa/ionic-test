(function() {
	'use strict';

	angular
		.module('app')
		.controller('geoCtrl', geoCtrl);

	geoCtrl.$inject = ['$cordovaGeolocation'];

	function geoCtrl($cordovaGeolocation) {
		var ctrl = this;

		var getLocation = function() {
			var posOptions = {
				timeout: 1000,
				enableHighAccuracy: true
			};

			$cordovaGeolocation
				.getCurrentPosition(posOptions)
				.then(function(position) {
					ctrl.position = position;
				}, function(err) {
					console.log(err);
				});


/*
			var watchOptions = {
				timeout: 1000,
				enableHighAccuracy: true // may cause errors if true
			};

			var watch = $cordovaGeolocation.watchPosition(watchOptions);
			watch.then(
				null,
				function(err) {
					console.log(err);
				},
				function(position) {
					var lat = position.coords.latitude
					var lng = position.coords.longitude
					console.log(lat);
					console.log(lng);
				});

			watch.clearWatch();
*/
		}

		setInterval(function() {
			getLocation();	
		}, 500);
	}

})();