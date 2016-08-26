;(function() {
	'use strict';
	angular.module('linksoftAppControllers')
		.controller('ThankyouController', [
			'$scope',
			'$location',
			'FormsDataService',
			function(
				$scope,
				$location,
				FormsDataService
				) {
				$scope.go = FormsDataService.go();
		}]);
}());
