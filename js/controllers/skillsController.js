jcsApp.controller('skillsController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
  $scope.skills = {};
  $scope.skills.headline = 'Ich biete';
  $scope.skills.content = [
    'HTML5',
    'CSS3',
    'SASS',
    'JavaScript',
    'Angular',
    'jQuery',
    'Clean Code',
    'Jasmine',
    'Crossbrowser',
    'Responsive Design',
    'Web Performance',
    'Grunt',
    'Vagrant',
    'VirtualBox',
    'Linux',
    'Scrum',
    'Git',
    'SVN',
    'Photoshop',
    'PSD to HTML',
    'UI/UX',
    'Web Design',
    'Web Typografie',
    'Agenturerfahrung',
    'Medienwissenschaft',
    'Teamfähigkeit',
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