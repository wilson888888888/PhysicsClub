function submitForm(){
	var frm=document.getElementById('theform');
	var fadeTime = 2000;
	frm.submit();
	frm.reset();
	return false;
}
