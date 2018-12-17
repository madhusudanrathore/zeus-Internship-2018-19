var popit=true;
window.onbeforeunload=function(){
	if(popit==true){
		popit=false;
		return "Are you sure you want to leave?";
	}
}
if (window.confirm("Do you really want to leave?")) {
}