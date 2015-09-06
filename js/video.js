function showVid(name, url){	
	var fadeTime = 2000;
	$(".vid").fadeOut(fadeTime);
	var start = '<div class="container vid"><div class="row"><div class="section col s9"><div class="card blue-grey darken-1 z-depth-2"><div class="card-content white-text"><span class="card-title white-text">';
	var mid = '</span><div class="valign-wrapper"><iframe width="800" height="450" src="http://www.youtube.com/embed/';
	var end = '"></iframe></div></div></div></div></div></div>';
	var div = $(start + name + mid + url + end);
	div.hide();
	div.insertAfter('#afterthis');
	div.fadeIn(fadeTime);
}
