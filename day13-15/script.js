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
function dobValidation( dob ){
	// Date of Birth should be in dd/mm/yy format only
	if( dob === "" ){
		return "Please enter a Date of Birth";
	}else if( dob.search( /[a-z]/i ) !== -1 ){
		return "Date of Birth cannot contain letters";
	}else if( dob.search( /\s/i ) !== -1 ){
		return "Date of Birth cannot contain spaces";
	}else if( dob.search( /[^0-9]^\//i ) !== -1 ){
		return "Date of Birth cannot special characters except /";
	}else if( dob.length < 10 ){
		return "Please enter a valid Date of Birth in the format of dd/mm/yy";
	}else{
		return "";
	}
}
function emailValidation( email ){
	console.log( email );
	// followed by .(dot)
	// followed by 2-3 characters
	// No other special characters allowed
	
	if( email === ""  ){
		return "Please enter a Email";
	}else if( email[0].search( /[0-9]/i ) !== -1 ){
		return "Email should not start with number";
	}else if( email.search( /[^0-9 ^a-z ^@ ^.]/i ) !== -1 ){
		return "No special Characters allowed"
	}else if( email.search(/@./) === -1 ){
		return "Email should contain @ and .";
	}else if( email.indexOf("@") < 2 ){
		return "Email should contain at least 2 characters/numbers before @";
	}else if( email.indexOf(".") - email.indexOf("@") < 3 ){
		return "Email should contain at least 2 characters between @ and .";
	}else if( ( email.length - email.indexOf(".") < 3 ) || ( email.length - email.indexOf(".") > 5 ) ){
		return "Email should have at least 2-3 characters following .";
	}else{
		return "";
	}
}
function onSubmit(){
	var userFirstName=document.getElementById("user-first-name");
	var userLastName=document.getElementById("user-last-name");
	var nameOfSpouse=document.getElementById("name-of-spouse");
	var genderMale=document.getElementById("male-radio").checked;
	var genderFemale=document.getElementById("female-radio").checked;
	var maritialStatusMarried=document.getElementById("married-radio").checked;
	var skills=document.getElementById("skillset").value;
	var checkboxName="hobbies";
	var hobbies=document.querySelectorAll('input[name="' + checkboxName + '"]:checked');
	
	var dateOfBirth=document.getElementById("date-of-birth");
	var dateOfBirthMessage=dobValidation( dateOfBirth.value );

	var userEmail=document.getElementById("user-email");
	var userEmailMessage=emailValidation( userEmail.value );

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
	}else 
	if( ( dateOfBirthMessage !== "" ) ){
		alert( dateOfBirthMessage );
		dateOfBirth.focus();
	}else if( ( userEmailMessage !== "" ) ){
		alert( userEmailMessage );
		userEmail.focus();
	}else{
		alert("Thank You");
		return true;
	}
	return false;
}