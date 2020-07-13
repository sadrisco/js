// Use this to copy a text into the clipboard
// You can call this function on buttons, links, texts or whatever you want 
// Simply change the text "texttobecopied" and be happy :D

	function copyToClipboard(copying) {
		var $temp = jQuery("<input>");
		jQuery("body").append($temp);
 		$temp.val(copying).select();
 		document.execCommand("copy");
 		$temp.remove();
	}		

// Calling the Function

copyToClipboard('texttobecopied');
