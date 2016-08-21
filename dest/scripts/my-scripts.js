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
                    .otherwise({
                        redirectTo: '/home'
                    });
            }
    ]);
}());

;(function() {
	'use strict';
	angular.module('linksoftAppControllers', [])
		.controller('IndexController', ['$scope', function($scope) {
			$scope.greeting = 'Welcome!';
			$scope.appName = 'LINKSOFT APP';
		}]);
}());
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

;(function() {
	'use strict';
	angular.module('linksoftAppServices', []);
}());
;(function() {
    'use strict';
    angular.module('linksoftAppServices')
        .factory('FormsDataService', [
            // '$rootScope',
            '$resource',
            function(
                // $rootScope,
                $resource
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
				var images = {
					images: $resource('data/json/:itemId.json', {}, {
						query: {
							method: 'GET',
							params: {
								itemId: 'images'
							},
							isArray: true
						}
					})
				};
				return images;
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
				scope: {
					images: '=',
					delay: '=',
					startwith: '='
				},
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