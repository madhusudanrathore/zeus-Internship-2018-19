var expanded=false;			
function showCheckboxes(){
  var checkboxes=document.getElementById("checkboxes");
  if (!expanded){
	checkboxes.style.display="block";
	expanded=true;
 }else{
	checkboxes.style.display="none";
	expanded=false;
  }
}
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