jcsApp.controller('mainController', [
	'$scope',
	'$http',
	'$timeout',
	'$rootScope',
	function(
		$scope,
		$http,
		$timeout,
		$rootScope
    ) {

	// Init before loading
	$scope.isBusy = true;
	$scope.showTopButton = true;
 	
 	/** 
  	 * Fetch website content
  	 */
  	$http({
    	url: 'content/working-examples.json'
  	}).then(function successCallback(response) {
  		$scope.examplesContent = response.data.payload;
    	$scope.isBusy = false;
  	}, function errorCallback(response) {
    	console.error('Error: ' + response.status + ' ' + response.statusText);
    	$scope.isBusy = false;
  	});

	/**
	 * Functions
	 */

	$scope.toTop = toTop;
	$scope.fancyBackgroundAnim = fancyBackgroundAnim;

	// Bounce page to top on click
	function toTop(event) {
		event.preventDefault;
		var scrollPage = $('html, body');
  		scrollPage.animate({
		  scrollTop: 0,
		}, 1000, 'easeOutBounce', function() {
		  // Anim ready
    	});
	}

  	// Shows a fancy animation with solarizing background. 
   	function fancyBackgroundAnim(event) {
   		event.preventDefault;
  		var face = $('.face'),
  	    body = $('body');
  		face.addClass('solarFader');
  		body.addClass('solarBackgroundFader');
  		// Remove anim class
  		$timeout(function() {
  			face.removeClass('solarFader');
  			body.removeClass('solarBackgroundFader');
  		}, 1100); 
  	};

  	// Measure if page-scrolling or not
	function scrollTopVisibility() {
	  	var viewportHeight = $(window).height(),
		 	pageHeight = $('body').height();
	  	if (viewportHeight > pageHeight) {
	  		$scope.showTopButton = false;
	  	} else {
			$scope.showTopButton = true;
	  	}
  	};


	/** 
  	 * Get filtered topics from topic-directive
  	 */

	$rootScope.$on('topicSelect', function (event, data) {
	  	// Get selection
	  	$scope.selection = data;
	  	// Check if page scrolling and top button
	  	$timeout(function() {
	  		scrollTopVisibility();
	  	}) ; 
	  	
	});	

}]);