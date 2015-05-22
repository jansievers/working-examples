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
		  // Anim ready
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
  
  // Public vars and functions after this point ...
  return {
    fancyboxHelperConf: {
      title: {
        type: 'inside'
      }
    },

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

    emailCrypt: function() {
      var e1 = "jcs",
          e2 = "@",
          e3 = "jan",
          e4 = "chris",
          e5 = "toph",
          e6 = "siev",
          e7 = "ers.de",
          m1 = "mai",
          m2 = "lto";
      return (m1 + m2 + ':' + e1 + e2 + e3 + '-' + e4 + e5 + '-' + e6 + e7);
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
    helpers: jcsWorkingExamples.fancyboxHelperConf,
    padding: 10
	});

	$(".fancybox-iframe").fancybox({
    helpers: jcsWorkingExamples.fancyboxHelperConf,
    padding: 10,
    width: 960,
    height: 496
	});

  $('#fancybox-about-me').fancybox({ 
    scrolling: 'auto',
    padding: 10,
    content: $('#about-me-content').html(),
    width: 800,
    height: 450
  });

  // Add save email
  $('body').delegate('#email-link', 'click', function(e) {
    window.location.href = jcsWorkingExamples.emailCrypt();
  });
});