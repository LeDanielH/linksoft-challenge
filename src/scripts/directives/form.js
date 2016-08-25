;(function () {
	'use strict';
	angular.module('linksoftAppDirectives')
		.directive('subscribe', [function() {
			var controller = ['$scope', '$http', 'FormsDataService', function($scope, $http, FormsDataService) {

			}];
			return {
				restrict: 'AE',
				replace: true,
				scope: {},
				link: function(scope, elem, attrs) {

				},
				controller: FormController,
				templateUrl: 'templates/directives/form.html'
			};
		}]);
}());
