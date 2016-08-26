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
						$location.path(path);
					}
				};
				return f;
			}
		]);
}());
