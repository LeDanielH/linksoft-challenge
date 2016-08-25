;(function() {
	'use strict';
	angular.module('linksoftAppControllers')
		.controller('SubscribeController', [
			'$scope',
			'FormsDataService',
			function(
				$scope,
				FormsDataService
				) {
				$scope.greeting = 'Welcome Home';
				$scope.form = FormsDataService.formsData.query();
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
