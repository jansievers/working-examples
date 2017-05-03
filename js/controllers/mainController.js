jcsApp.controller('mainController', [
	'$scope',
	'$filter',
	'$http',
	'$timeout',
	function(
		$scope,
		$filter,
		$http,
		$timeout
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

}]);