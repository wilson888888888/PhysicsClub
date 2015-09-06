function showVid(name, url, desc){	
	var fadeTime = 1500;
	$(".vid").fadeOut(fadeTime);
	var start = '<div class="container vid"><div class="row"><div class="section col s9"><div class="card blue-grey darken-1 z-depth-2"><div class="card-content white-text"><span class="card-title white-text">';
	var mid = '</span><div class="valign-wrapper"><iframe width="800" height="450" src="http://www.youtube.com/embed/';
	var mid2 = '"></iframe></div><br><p>'
	var end= '</p</div></div></div></div></div>';
	var div = $(start + name + mid + url + mid2 + desc + end);
	div.hide();
	div.insertAfter('#afterthis');
	div.fadeIn(fadeTime);
}
