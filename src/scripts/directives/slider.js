;(function () {
	'use strict';
	angular.module('linksoftAppDirectives')
		.directive('slider', [function() {
			return {
				restrict: 'AE',
				replace: true,
				scope: {
					images: '=',
					delay: '=',
					startwith: '='
				},
				link: function(scope, elem, attrs) {
					
				},

				templateUrl: 'templates/directives/slider.html'
			};
		}]);
}());