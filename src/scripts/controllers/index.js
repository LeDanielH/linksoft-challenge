;(function() {
	'use strict';
	angular.module('linksoftAppControllers', [])
		.controller('IndexController', ['$scope', function($scope) {
			$scope.greeting = 'Welcome!';
			$scope.appName = 'LINKSOFT APP';
		}]);
}());