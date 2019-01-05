function resetForm(){
	var userFirstName=document.getElementById("user-first-name");
	userFirstName.focus();
}
function maritialStatus(received){
	var nameOfSpouse=document.getElementById("name-of-spouse");
	if( received.id === "married-radio" ){
		nameOfSpouse.readOnly=false;
	}else if( received.id === "non-married-radio" ){
		nameOfSpouse.readOnly=true;
		nameOfSpouse.value="";
	}
}
function onSubmit(){
	var userFirstName=document.getElementById("user-first-name");
	var userLastName=document.getElementById("user-last-name");
	var nameOfSpouse=document.getElementById("name-of-spouse");
	var genderMale=document.getElementById("male-radio").checked;
	var genderFemale=document.getElementById("female-radio").checked;
	var maritialStatusMarried=document.getElementById("marriedRadio").checked;
	var skills=document.getElementById("skillset").value;	
	var checkboxName="hobbies";
	var hobbies=document.querySelectorAll('input[name="' + checkboxName + '"]:checked');

	if( userFirstName.value === "" ){
		alert("Please enter a First Name");
		userFirstName.focus();
	}else if( userFirstName.value.indexOf(' ')>=0 ){
		alert("First name has whitespace");
		userFirstName.focus();
	}else if( userLastName.value === "" ){
		alert("Please enter a Last Name");
		userLastName.focus();
	}else if( userLastName.value.indexOf(' ')>=0 ){
		alert("Last name has whitespace");
		userLastName.focus();
	}else if( genderMale===false && genderFemale===false ){
		alert("Please select a gender");
	}else if( hobbies.length === 0 ){
		alert("Please select at least one hobby");
	}else if( skills === ""  ){
		alert("Please select a skill");
	}else if( maritialStatusMarried === true && nameOfSpouse.value==="" ){
		alert("Please enter a Spouse name");
		nameOfSpouse.focus();
	}else if( maritialStatusMarried === true && nameOfSpouse.value.indexOf(' ')>=0 ){
		alert("Spouse name has whitespace");
		nameOfSpouse.focus();
	}else{
		alert("Thank You");
		return true;
	}
	return false;
}