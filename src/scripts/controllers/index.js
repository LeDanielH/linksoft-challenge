;(function() {
	'use strict';
	angular.module('linksoftAppControllers', ['linksoftAppServices'])
		.controller('IndexController', ['$scope','SliderDataService',
			function($scope, SliderDataService) {
				$scope.greeting = 'Welcome!';
				$scope.description = 'Homework for LINKSOFT';
				$scope.appName = 'LINKSOFT APP';
				$scope.slider = SliderDataService.images.query();
				$scope.selected = 1;
				$scope.templates = [{
					url: 'templates/content.html'
				}];
				$scope.template = $scope.templates[0];
			}
		]);
}());
