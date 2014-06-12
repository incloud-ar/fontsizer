/**
* @Font Sizer 
* @version: 1.0
* @author: Gerónimo Ortiz http://www.playwebs.net/
* @date: 2014-06-12
*/
$(function(){
	
	$.fn.fontsizer = function(options) {
		
		var defaults = {
			min: 12,
			max: 17, 
			elements: 'p'
		}; 

		var options = $.extend(defaults, options); 
		var reset = $(defaults.elements).css('fontSize');	// grab the default font size
		var elm = $(defaults.elements);						// font resize these elements
		var size = reset.replace('px','');
				
		// font size ++
		$('#sizermax').click(function(){
			
			if (size<=defaults.max) {
				size++;
				elm.css({'fontSize': size});
			}
			return false;
		});
		
		// font size --
		$('#sizermin').click(function(){
			if (size>=defaults.min) { 
				size--;
				elm.css({'fontSize': size});
			}
			return false; 
		});
	}

});
