// Module pattern
var jcsWorkingExamples = (function () {
 
  var myPrivateVar,
  	  myPrivateMethod;
 
  // A private counter variable
  myPrivateVar = 0;
 
  // A private function which logs any arguments
  myPrivateMethod = function(foo) {
      console.log( foo );
  };
 
  return {
 
    // A public variable
    myPublicVar: "foo",
 
    // A public function utilizing privates
    dummyContent: function(count) {
      // Increment our private counter
      var item = $('main').html();
      console.log(item);

			for (i = 0; i < count; i++) { 
			    $('main').append(item);
			}

      // Call our private method using bar
      //myPrivateMethod( bar );
    },

    setImageHover: function() {
			$( ".box" )
			  .mouseenter(function() {
			    $(this).find('img').css('opacity', 1);
			  })
			  .mouseleave(function() {
			    $(this).find('img').css('opacity', 0);
			  });
    }
  };
})();


$(document).ready(function() {
	jcsWorkingExamples.setImageHover();
});