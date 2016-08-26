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
