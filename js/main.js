/** Module pattern */
var jcsWorkingExamples = (function (jQ) {
  
  // Public vars and functions after this point ...
  
  return {
    fancyboxHelperConf: {
      title: {
        type: 'inside'
      }
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
    }

  };
})(jQuery);


/** Execute initial functions when DOM is ready */
$(document).ready(function() {
  
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