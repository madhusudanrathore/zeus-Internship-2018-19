function resetForm(){
	var userFirstName=document.getElementById("userFirstName");
	userFirstName.focus();
}
function maritialStatus(received){
	var nameOfSpouse=document.getElementById("nameOfSpouse");
	if( received.id === "marriedRadio" ){
		nameOfSpouse.readOnly=false;
	}else if( received.id === "nonMarriedRadio" ){
		nameOfSpouse.readOnly=true;
		nameOfSpouse.value="";
	}
}
function onSubmit(){
	var userFirstName=document.getElementById("userFirstName");
	var userLastName=document.getElementById("userLastName");
	var nameOfSpouse=document.getElementById("nameOfSpouse");
	var genderMale=document.getElementById("maleRadio").checked;
	var genderFemale=document.getElementById("femaleRadio").checked;
	var maritialStatusMarried=document.getElementById("marriedRadio").checked;
	var skills=document.getElementById("skillset").value;
	
	var checkboxName="hobbies";
	var hobbies=document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), values = [];

	if( userFirstName.value === "" ){
		alert("Please enter a First Name");
		userFirstName.focus();
	}else if( userLastName.value === "" ){
		alert("Please enter a Last Name");
		userLastName.focus();
	}else if( genderMale===false && genderFemale===false ){
		alert("Please select a gender");
	}else if( userFirstName.value.indexOf(' ')>=0 ){
		alert("First name has whitespace");
		userFirstName.focus();
	}else if( userLastName.value.indexOf(' ')>=0 ){
		alert("Last name has whitespace");
		userLastName.focus();
	}else if( hobbies.length === 0 ){
		alert("Please select at least one hobby");
	}else if( maritialStatusMarried === true && nameOfSpouse.value.indexOf(' ')>=0 ){
		alert("Spouse name has whitespace");
		nameOfSpouse.focus();
	}else if( skills ===""  ){
		alert("Please select a skill");
	}else{
		alert("Thank You");
		return true;
	}
	return false;
}