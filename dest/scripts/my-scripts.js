;(function() {
	'use strict';
	angular.module('linksoftApp', [
		'ngRoute',
		'ngSanitize',
		'ngAnimate',
		'linksoftAppControllers',
		'linksoftAppServices',
		'linksoftAppFilters',
		'linksoftAppDirectives',
		'linksoftAppAnimations'
	]).config([
		'$routeProvider',
		'$locationProvider',
		function(
			$routeProvider,
			$locationProvider) {
				$routeProvider
					.when('/subscribe', {
						templateUrl: 'templates/subscribe.html',
						controller: 'SubscribeController'
					})
					.when('/thankyou', {
						templateUrl: 'templates/thankyou.html',
						controller: 'ThankyouController'
					})
					.otherwise({
						redirectTo: '/subscribe'
					});
			}
	]);
}());

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

;(function() {
	'use strict';
	angular.module('linksoftAppControllers')
		.controller('SubscribeController', [
			'$scope',
			'$location',
			'$http',
			'FormsDataService',
			function(
				$scope,
				$location,
				$http,
				FormsDataService
				) {
				$scope.greeting = 'Welcome Home';
				$scope.form = FormsDataService.formsData.query();
				$scope.subscriber = {};

				$scope.processSubscriber = function() {
					console.log('processing subscriber');
					if ($scope.subscribeForm.$valid) {
						$scope.subscriber = {
							name: $scope.subscriber.name,
							email: $scope.subscriber.email,
							platform: $scope.subscriber.platform
						};
						console.log('You have successfullly submitted your data', $scope.subscriber);

						var url = 'http://www.plda.cz/Services/Test.asmx?op=AddDataToSpreadsheet';
						var data = $scope.subscriber;
						var config = {
							headers : {
								'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
								'Access-Control-Allow-Origin': '*'
							}
						};

						$http
							.post(url, data, config)
							.then(
								function(response) {
									var data = response.data;
									$location.path('/thankyou');
								}, function(error) {
									var data = error.data;
									console.log('Data could not be posted');
								});


						// $location.path('/thankyou');
					} else {
						console.log('Something went wrong. Please try again.');
					}
				};

				// $scope.postFormData = function() {
				// 	console.log("posting data....");

				// 	$http.post(
				// 		'http://www.plda.cz/Services/Test.asmx?op=AddDataToSpreadsheet',
				// 		$scope.subscriber, config).then(
				// 			console.log($scope.subscriber), // success callback
				// 			console.log('Something went wrong') // errors callback
				// 		);
				// };
		}]);
}());

;(function() {
	'use strict';
	angular.module('linksoftAppControllers')
		.controller('ThankyouController', [
			'$scope',
			function(
				$scope
				) {
		}]);
}());

;(function() {
	'use strict';
	angular.module('linksoftAppServices', ['ngResource']);
}());
;(function() {
	'use strict';
	angular.module('linksoftAppServices')
		.factory('FormsDataService', [
			'$resource',
			'$location',
			function(
				$resource,
				$location
			) {
				var f = {
					formsData: $resource('data/json/:itemId.json', {}, {
						query: {
							method: 'GET',
							params: {
								itemId: 'form'
							},
							isArray: false
						}
					})
				};
				return f;
			}
		]);
}());

;(function () {
	'use strict';
	angular.module('linksoftAppServices')
		.factory('SliderDataService', [
			'$resource',
			function (
				$resource
			) {
				var im = {
					images: $resource('data/json/:itemId.json', {}, {
						query: {
							method: 'GET',
							params: {
								itemId: 'slider'
							},
							isArray: true
						}
					})
				};
				return im;
			}
		]);
}());

;(function() {
	'use strict';
	angular.module('linksoftAppDirectives', []);
}());
;(function () {
	'use strict';
	angular.module('linksoftAppDirectives')
		.directive('myDirective', function () {
			return {
				restrict: 'AE',
				templateUrl: function (ele, attrs) {
					return attrs.templatePath;
				}
			};
		});
}());
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

;(function() {
	'use strict';
	angular.module('linksoftAppFilters', []);
}());
;(function() {
	'use strict';
	angular.module('linksoftAppAnimations', []);
}());