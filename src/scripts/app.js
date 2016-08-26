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
