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