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

  $http.get('content/working-examples.json')
    .success(function(data) {
      console.log(data.payload);
      $scope.examplesContent = data.payload;
    })
    .error(function(data, stats){
      console.log(data);
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