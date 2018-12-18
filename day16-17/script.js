function preloader(){
	document.getElementById("loading").innerHTML="Image Loaded";
	document.getElementById("content").style.display="block";
}
window.onload=preloader;

// task 2
window.onbeforeunload=function() {
	return "Are you sure you want to leave?";
}

function dragElement(){
	var elmnt=document.getElementById("mydiv");
	var pos1=0, pos2=0, pos3=0, pos4=0;
	elmnt.onmousedown=dragMouseDown;

	function dragMouseDown(e) {
		e=e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3=e.clientX;
		pos4=e.clientY;
		document.onmouseup=closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove=elementDrag;
	}

	function elementDrag(e) {
		e=e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1=pos3 - e.clientX;
		pos2=pos4 - e.clientY;
		pos3=e.clientX;
		pos4=e.clientY;
		// set the element's new position:
		elmnt.style.top=(elmnt.offsetTop - pos2) + "px";
		elmnt.style.left=(elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onmouseup=null;
		document.onmousemove=null;
	}
}

var passwordString;
function validatePassword(){
	passwordString=document.getElementById("password-field").value;
	var criteriaFirst=document.getElementById("criteria-first");
	var criteriaSecond=document.getElementById("criteria-second");
	var criteriaThird=document.getElementById("criteria-third");
	var criteriaFourth=document.getElementById("criteria-fourth");
	var criteriaFifth=document.getElementById("criteria-fifth");

	console.log( passwordString );
	// criteria 1
	if( passwordString.length >= 8 ){
		criteriaFirst.style.color="green";
	}else if( passwordString.length < 8 ){
		criteriaFirst.style.color="red";
	}
	// criteria 2
	if( passwordString.search( /[A-Z]/ ) !== -1 ){
		criteriaSecond.style.color="green";
	}else if( passwordString.search( /[A-Z]/ ) === -1 ){
		criteriaSecond.style.color="red";
	}
	// criteria 3
	if( passwordString.search( /[a-z]/ ) !== -1 ){
		criteriaThird.style.color="green";
	}else if( passwordString.search( /[a-z]/ ) === -1 ){
		criteriaThird.style.color="red";
	}
	// criteria 4
	if( passwordString.search( /[0-9]/ ) !== -1 ){
		criteriaFourth.style.color="green";
	}else if( passwordString.search( /[0-9]/ ) === -1 ){
		criteriaFourth.style.color="red";
	}
	// criteria 5
	if( passwordString.search( /[^0-9 a-z]/i ) !== -1 ){
		criteriaFifth.style.color="green";
	}else if( passwordString.search( /[^0-9 a-z]/i ) === -1 ){
		criteriaFifth.style.color="red";
	}
}