jcsApp.directive('topicSelectDirective', ['$rootScope', function($rootScope) {
    return {
        templateUrl: 'js/directives/topicSelectDirective.html',
        scope: {},
        link: function(scope, elem, attr) {

        	scope.fieldsets = [
        		{
        			id: 'websites',
        			label: 'Frontend Development'
        		},
           		{
        			id: 'design',
        			label: 'Grafik und Screendesign'
        		},
           		{
     	  			id: 'scene',
        			label: 'Demo Scene'
        		},
        		{
        			id: 'personal',
        			label: 'Uber mich'
        		}
        	];

        	scope.selection = $.map(scope.fieldsets, function(fi) { return fi['id']; });

        	scope.handleTopicClick = handleTopicClick;

        	function handleTopicClick(section) {
            	if (scope.selection.indexOf(section) > -1) {
            		scope.selection.splice(scope.selection.indexOf(section), 1);	
            	} else {
            		scope.selection.push(section);
            	}
            	$rootScope.$broadcast('topicSelect', scope.selection);
        	}

        }
    };

}]);
