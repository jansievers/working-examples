// Init Angular JS app

var jcsApp = angular.module('jcsApp', []); 

jcsApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {

  $scope.name = 'Jan-Christoph Sievers';

  $scope.handle = 'SuperHose';

  $scope.lcase = function() {
    return $filter('lowercase')($scope.handle);
  };

  $scope.clickTest = function() {
    alert("clickTest");
  };

  $scope.examplesContent = null;

  // Get website content
  $http({
    url: 'content/working-examples.json'
  }).then(function successCallback(response) {
    $scope.examplesContent = response.data.payload;
  }, function errorCallback(response) {
    console.error('Error: ' + response.status + ' ' + response.statusText);
  });

}]);


jcsApp.controller('skillsController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
  $scope.skills = {};
  $scope.skills.headline = 'Ich biete';
  $scope.skills.content = [
    'HTML5',
    'HAML',
    'CSS3',
    'SASS',
    'JavaScript',
    'jQuery',
    'Clean Code',
    'Ajax',
    'JSON',
    'Jasmine',
    'Crossbrowser',
    'Responsive Design',
    'Web Performance',
    'Grunt',
    'Vagrant',
    'VirtualBox',
    'Linux',
    'Scrum',
    'Magnolia CMS',
    'Git',
    'SVN',
    'Photoshop',
    'PSD to HTML',
    'UI/UX',
    'Web Design',
    'Web Typografie',
    'Agenturerfahrung',
    'Medienwissenschaft',
    'Teamf&auml;higkeit',
    'Engagement',
    'Zielstrebigkeit'
  ];

  $scope.hobbies = [
    'Computergrafik',
    'Demo Szene',
    'Film & Kino',
    'Games',
    'Geschichte',
    'Joggen',
    'Krafttraining',
    'Radfahren',
    'Technik und Wissenschaft',
    'Wintersport'
  ];

}]);