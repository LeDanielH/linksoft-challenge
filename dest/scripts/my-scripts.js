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
			'FormsDataService',
			function(
				$scope,
				$location,
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
						console.log('You have successfullly subscribed to our newsletter', $scope.subscriber);
						$location.path('/thankyou');
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
					}),
					patterns: {
						email: "/^\b\w{1,30}\b(\.\b\w{1,30}\b)?@\b[a-zA-Z0-9]{1,30}\b\.\b[a-zA-Z]{1,10}\b(\.\b[a-zA-Z]{1,10}\b)?(\s)?$/",
						name: "/^(\b[a-zA-Z]{1,20}\b\s{0,2}){2,4}$/"
					},
					go: function (path) {
						return $location.path(path);
					}
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