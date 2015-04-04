// Module pattern
var jcsWorkingExamples = (function (jQ) {
 
  var myPrivateVar,
  	  myPrivateMethod;
 
  // A private counter variable
  myPrivateVar = 0;
 
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
 
  return {
    // A public variable
    myPublicVar: "foo",
 
    initImageHover: function() {
			jQ( ".box" )
			  .mouseenter(function() {
			    jQ(this).find('img').css('opacity', 1);
			  })
			  .mouseleave(function() {
			    jQ(this).find('img').css('opacity', 0);
			  });
    },

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
    }

  };
})(jQuery);

$(document).ready(function() {
	jcsWorkingExamples.initImageHover();
	jcsWorkingExamples.initTopicSelect();
	jcsWorkingExamples.initToTop();
});