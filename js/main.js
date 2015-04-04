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
  };
  scrollToTop = function() {
  	var scrollPage = jQ('html, body');
  	scrollPage.animate({
		  scrollTop: 0,
		}, 1000, 'easeOutBounce', function() {
		  console.log('Anim ready');
    });
  };
  fancyBackgroundAnim = function() {
  	var face = $('.face'),
  	    body = $('body');
  	console.log(face);
  	face.addClass('solarFader');
  	body.addClass('solarBackgroundFader');
  	// Remove anim class
  	setTimeout(function() {
  		face.removeClass('solarFader');
  		body.removeClass('solarBackgroundFader');
  	}, 1100); 
  };
 
  return {
    initTopicSelect: function() {
    	jQ('.topic-select').find('input').prop('checked', true);
    	jQ('.topic-select').find('input').on('click', function() {
				handleTopicClick(jQ(this));
    	});
    },
    initToTop: function() {
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
});