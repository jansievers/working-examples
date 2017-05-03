jcsApp.directive('topicSelectDirective', ['$timeout', function($timeout) {
    return {
        templateUrl: 'js/directives/topicSelectDirective.html',
        scope: {},
        link: function(scope, elem, attr) {

        	scope.handleTopicClick = handleTopicClick;

        	function handleTopicClick(section) {
        		console.log(section);

            // Broadcast zum mainController
        	}

        }
    };

}]);
