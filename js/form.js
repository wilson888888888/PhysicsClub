function submitForm(){
	var frm=document.getElementById('theform');
	document.getElementById('success').style.visibility = 'visible';
	frm.submit();
	frm.reset();
	return false;
}

function closeCard(){
	document.getElementById('success').style.visibility = 'hidden';
}
