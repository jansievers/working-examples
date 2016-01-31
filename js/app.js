var jcsApp = angular.module('jcsApp', []); 

jcsApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {

  $scope.name = 'Jan-Christoph Sievers';

  $scope.handle = 'SuperHose';

  $scope.lcase = function() {
    return $filter('lowercase')($scope.handle);
  };

  $scope.examplesContent = null;

  $http.get('content/working-examples.json')
    .success(function(data) {
      console.log(data.payload);
      $scope.examplesContent = data.payload;
    })
    .error(function(data, stats){
      console.log(data);
    });

}]);