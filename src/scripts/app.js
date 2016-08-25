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
