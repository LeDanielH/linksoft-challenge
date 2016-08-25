;(function () {
	'use strict';
	angular.module('linksoftAppDirectives')
		.directive('slider', [function() {
			return {
				restrict: 'AE',
				replace: true,
				templateUrl: 'templates/directives/slider.html'
			};
		}]);
}());
