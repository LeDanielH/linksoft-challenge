;(function () {
	'use strict';
	angular.module('linksoftAppDirectives')
		.directive('signup', [function() {
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
