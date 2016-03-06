/** Module pattern */
var jcsWorkingExamples = (function (jQ) {
  /**
   * @description Shows topics depending on checked or unchecked checkboxes.
   * @type {function}
   * @param {object} checkbox - jQuery object of the topic checkbox.
   * @private
   */
  var handleTopicClick = function(checkbox) {
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

  /**
   * @description Shows topics depending on checked or unchecked checkboxes.
   * @type {function}
   * @param {object} fieldset - jQuery object of the topic fieldset.
   * @private
   */
  var handleTopicClickFieldset = function(fieldset) {
    var checkbox = fieldset.find('input'),
        context = fieldset.attr('class');
    if (checkbox.prop('checked') === true) {
      checkbox.prop('checked', false);
      jQ('main').find('.' + context).hide();
    } else {
      checkbox.prop('checked', true);
      jQ('main').find('.' + context).show();
    }
    // Visibilty of top button
    scrollTopVisibility();
    // Check if nothing is displayed and show fallback text
    checkEmptyContent();
  };

  /**
   * @description Moves page to top with fancy animation.
   * @type {function}
   * @private
   */
  var scrollToTop = function() {
  	var scrollPage = jQ('html, body');
  	scrollPage.animate({
		  scrollTop: 0,
		}, 1000, 'easeOutBounce', function() {
		  // Anim ready
    });
  };

  /**
   * @description Shows Back To Top Button depending if vertical scrolling or not.
   * @type {function}
   * @private
   */
  var scrollTopVisibility = function() {
  	var button = $('footer .top'),
			  viewportHeight = $(window).height(),
			  pageHeight = $('body').height();
  	if (viewportHeight > pageHeight) {
  		button.css('display', 'none');
  	} else {
			button.css('display', 'block');
  	}
  };

  /**
   * @description Shows a fancy animation with solarizing background.
   * @type {function}
   * @private
   */  
  var fancyBackgroundAnim = function() {
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

  /**
   * @description Check if no topic is selected and show a fallback message.
   * @type {function}
   * @private
   */  
  var checkEmptyContent = function() {
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

    /**
     * @description Adds events to the topic select checkboxes.
     * @type {function}
     * @public
     */ 
    initTopicSelect: function() {
    	jQ('.topic-select').find('input').prop('checked', true);
    	jQ('.topic-select').find('input').on('click', function(e) {
				e.stopPropagation();
        handleTopicClick(jQ(this));
    	});
      jQ('.topic-select').find('fieldset').on('click', function(e) {
        e.stopPropagation();
        handleTopicClickFieldset(jQ(this));
      });
    },
    
    /**
     * @description Triggers back to top function. Handles also visibility of To Top Button before.
     * @type {function}
     * @public
     */
    initToTop: function() {
    	// Visibilty of top button
    	scrollTopVisibility();

    	// Click scroll to top
    	jQ('.top').on('click', function(e) {
				var disableLink = e.preventDefault();
				scrollToTop();
    	});
    },

    /**
     * @description Creates email from small pieces .
     * @type {function}
     * @returns {string} Concatinated email address
     * @public 
     */
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

    /**
     * @description Adds event to the eye and shows solarize effect on click.
     * @type {function}
     * @public 
     */
    initEye: function() {
    	jQ('.eye').on('click', function(e) {
				var disableLink = e.preventDefault();
				fancyBackgroundAnim();
    	});
    }
  };
})(jQuery);


/** Execute initial functions when DOM is ready */
$(document).ready(function() {
  
	jcsWorkingExamples.initTopicSelect();
	jcsWorkingExamples.initToTop();
	jcsWorkingExamples.initEye(); 

  /**
   * @description Activate fancyboxes - http://fancyapps.com/fancybox/
   * @type {function}
   * @public 
   */

  // Normal fancybox, e.g. for design examples
	$(".fancybox").fancybox({
    helpers: jcsWorkingExamples.fancyboxHelperConf,
    padding: 10
	});

  // Fancybox for demo scene examples
	$(".fancybox-iframe").fancybox({
    helpers: jcsWorkingExamples.fancyboxHelperConf,
    padding: 10,
    width: 830,
    height: 496
	});

  // Fancybox for the About Me section.
  $('#fancybox-about-me').fancybox({ 
    scrolling: 'auto',
    padding: 10,
    content: $('#about-me-content').html(),
    width: 800,
    height: 450
  });

  /** Add save email. */
  $('body').delegate('#email-link', 'click', function(e) {
    window.location.href = jcsWorkingExamples.emailCrypt();
  });
});