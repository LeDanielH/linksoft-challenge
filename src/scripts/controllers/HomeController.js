;(function() {
	'use strict';
	angular.module('linksoftAppControllers')
		.controller('HomeController', [
			'$scope', 
			function(
				$scope
				) {
				$scope.greeting = 'Welcome Home';
		}]);
}());
