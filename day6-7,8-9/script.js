var idArray=["pricing","tests","resources"];
var arrayLength = idArray.length;
var currentDropdown="";

function hideDropdowns(){
    // get dropdowns as an array
    var elements=document.getElementsByClassName("dropdown");
    for (var i=0; i<arrayLength; ++i){
        elements[i].style.display="none";
    }
    currentDropdown="";
}
function showDropdown(targetId){
    var targetDropdown=document.getElementById( targetId + "-dropdown");
    targetDropdown.style.display="block";
    currentDropdown=targetId;
}
function toggleDropdown(received){
    if( currentDropdown === "" ){
        // no open dropdown
        // open clicked dropdown
        showDropdown(received.id);
    }else if( currentDropdown == received.id ){
        // currently open dropdown clicked again
        // close it
        hideDropdowns();
    }else{
        // some dropdown already open
        // hide them and open currently clicked
        hideDropdowns();
        showDropdown(received.id);
    }
}
/* called when clicked anywhere outside dropdown links */
window.onclick=function(e){
    if( idArray.indexOf(e.target.id) === -1 ){
        // if click is anywhere outside of dropdown links
        // hide dropdowns
        hideDropdowns();
    }
 }