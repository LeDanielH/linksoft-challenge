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
