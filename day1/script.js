function verificationFunction(){
	var name = document.getElementById("userName");
	var comments = document.getElementById("userComments");
	var maleSelected = document.getElementById("maleRadio");
	var femaleSelected = document.getElementById("femaleRadio");
	
	if( name.value==="" || comments.value==="" || ( maleSelected.checked===false && femaleSelected.checked==false )){
		alert("All fields are compulsory");
		if(name.value===""){
			name.focus();
		}else if(comments.value===""){
			comments.focus();
		}else if( maleSelected.checked===false && femaleSelected.checked==false ){
			maleSelected.focus();
		}
		return false;
	}else{
		return true;
	}
}