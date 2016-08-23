;(function () {
	'use strict';
	angular.module('linksoftAppDirectives')
		.directive('subscribe', [function() {
			return {
				restrict: 'AE',
				replace: true,
				// scope: {
				// 	images: '=',
				// 	delay: '=',
				// 	startwith: '='
				// },
				link: function(scope, elem, attrs) {

				},

				templateUrl: 'templates/directives/form.html'
			};
		}]);
}());
