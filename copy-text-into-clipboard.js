// This script copies a text into the clipboard
// You can call it on buttons, links, texts or whatever you want 
// All you need to change is the "texttobecopied" camp 
// sadrisco 2020

	function copyToClipboard(copying) {
		var $temp = jQuery("<input>");
		jQuery("body").append($temp);
 		$temp.val(copying).select();
 		document.execCommand("copy");
 		$temp.remove();
	}		

// Calling the Function

copyToClipboard('texttobecopied');
