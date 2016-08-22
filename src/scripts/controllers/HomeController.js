;(function() {
	'use strict';
	angular.module('linksoftAppControllers')
		.controller('HomeController', [
			'$scope',
			'FormsDataService',
			function(
				$scope,
				FormsDataService
				) {
				$scope.greeting = 'Welcome Home';
				$scope.form = FormsDataService.formsData.query();
		}]);
}());
