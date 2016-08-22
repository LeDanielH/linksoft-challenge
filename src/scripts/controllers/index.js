;(function() {
	'use strict';
	angular.module('linksoftAppControllers', [])
		.controller('IndexController', [
			'$scope',
			'sliderDataService',
			function(
				$scope,
				sliderDataService
				) {
			$scope.greeting = 'Welcome!';
			$scope.description = 'Homework for LINKSOFT';
			$scope.appName = 'LINKSOFT APP';
			$scope.slider = sliderDataService.slider.query();
		}]);
}());