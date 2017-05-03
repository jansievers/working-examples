jcsApp.controller('mainController', [
	'$scope',
	'$filter',
	'$http',
	'$timeout',
	'$rootScope',
	function(
		$scope,
		$filter,
		$http,
		$timeout,
		$rootScope
    ) {

 	$scope.name = 'Jan-Christoph Sievers';

 	$scope.lcase = function() {
    	return $filter('lowercase')($scope.handle);
  	};

	$scope.isBusy = true;

  	// Get website content
  	$http({
    	url: 'content/working-examples.json'
  	}).then(function successCallback(response) {
  		$scope.examplesContent = response.data.payload;
    	$scope.isBusy = false;
  	}, function errorCallback(response) {
    	console.error('Error: ' + response.status + ' ' + response.statusText);
    	$scope.isBusy = false;
  	});

  	// Get filtered topics
	$rootScope.$on('topicSelect', function (event, data) {
	  console.log(data); // 'Data to send'
	});	

}]);