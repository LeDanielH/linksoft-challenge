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
                    .when('/home', {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeController'
                    })
                    .when('/thankyou', {
                        templateUrl: 'templates/thankyou.html',
                        controller: 'ThankyouController'
                    })
                    .otherwise({
                        redirectTo: '/home'
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
			}
		]);
}());

;(function() {
	'use strict';
	angular.module('linksoftAppControllers')
		.controller('FormController', [
			'$scope',
			// '$http',
			'FormsDataService',
			function(
				$scope,
				// $http,
				FormsDataService
			) {
				$scope.subscriber = {};

				$scope.processSubscriber = function() {
					if ($scope.subscribeForm.$valid) {
						$scope.subscriber.push({
							name: $scope.name,
							email: $scope.email,
							platform: $scope.platform
						});
						alert('You have successfullly subscribed to our newsletter');
					} else {
						alert('Something went wrong. Please try again.');
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

;(function() {
	'use strict';
	angular.module('linksoftAppServices', ['ngResource']);
}());
;(function() {
	'use strict';
	angular.module('linksoftAppServices')
		.factory('FormsDataService', [
			// '$rootScope',
			'$resource',
			'$http',
			function(
				// $rootScope,
				$resource,
				$http
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

					postFormData: function() {
						console.log("posting data....");
				        $http.post('http://www.plda.cz/Services/Test.asmx?op=AddDataToSpreadsheet',
					    JSON.stringify(data)).success(function(){
					    	console.log(data);
					    });

					    $http.post('/someUrl', data, config).then(successCallback, errorCallback);
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
				// scope: {
				// 	images: '=',
				// 	delay: '=',
				// 	startwith: '='
				// },
				link: function(scope, elem, attrs) {

				},

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