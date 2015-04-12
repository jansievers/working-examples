// Module pattern
var jcsWorkingExamples = (function (jQ) {
  
  // A private function which logs any arguments
  handleTopicClick = function(checkbox) {
      var context = checkbox.closest('fieldset').attr('class');     
      if (checkbox.prop('checked') === true) {
      	jQ('main').find('.' + context).show();
      } else {
				jQ('main').find('.' + context).hide();
      }
      // Visibilty of top button
    	scrollTopVisibility();
      // Check if nothing is displayed and show fallback text
      checkEmptyContent();
  };

  scrollToTop = function() {
  	var scrollPage = jQ('html, body');
  	scrollPage.animate({
		  scrollTop: 0,
		}, 1000, 'easeOutBounce', function() {
		  console.log('Anim ready');
    });
  };

  scrollTopVisibility = function() {
  	var button = $('footer .top'),
			  viewportHeight = $(window).height(),
			  pageHeight = $('body').height();
  	if (viewportHeight > pageHeight) {
  		button.hide();
  	} else {
			button.show();
  	}
  };
  
  fancyBackgroundAnim = function() {
  	var face = $('.face'),
  	    body = $('body');
  	face.addClass('solarFader');
  	body.addClass('solarBackgroundFader');
  	// Remove anim class
  	setTimeout(function() {
  		face.removeClass('solarFader');
  		body.removeClass('solarBackgroundFader');
  	}, 1100); 
  };

  checkEmptyContent = function() {
  	var mainContainer = $('main'),
  			contentAvailable,
  	    elementsVisible = 0;
  	$.each(mainContainer.find('article'), function() {
  		if ($(this).attr('style') !== 'display: none;') {
  			elementsVisible++;
  		}
  	});
  	if (elementsVisible === 0) {
  		mainContainer.find('.fallback-message ').show();
  	} else {
			mainContainer.find('.fallback-message ').hide();
  	}
  };
  
  // Public functions after this point ...
  return {
    initTopicSelect: function() {
    	jQ('.topic-select').find('input').prop('checked', true);
    	jQ('.topic-select').find('input').on('click', function() {
				handleTopicClick(jQ(this));
    	});
    },
    
    initToTop: function() {
    	// Visibilty of top button
    	scrollTopVisibility();

    	// Click scroll to top
    	jQ('.top').on('click', function(e) {
				var disableLink = e.preventDefault();
				scrollToTop();
    	});
    },

    initEye: function() {
    	jQ('.eye').on('click', function(e) {
				var disableLink = e.preventDefault();
				fancyBackgroundAnim();
    	});
    }
  };
})(jQuery);



$(document).ready(function() {
	jcsWorkingExamples.initTopicSelect();
	jcsWorkingExamples.initToTop();
	jcsWorkingExamples.initEye(); 

	// Activate fancybox
	// http://fancyapps.com/fancybox/
	$(".fancybox").fancybox({
    helpers: {
      title: {
        type: 'inside'
      }
    },
    padding: 10
	});

	$(".fancybox-iframe").fancybox({
    helpers: {
      title: {
        type: 'inside'
      }
    },
    padding: 10,
    width: 800,
    height: 450
	});
});