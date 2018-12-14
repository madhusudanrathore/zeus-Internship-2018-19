var idArray=["pricing","tests","resources"];
var currentDropdown="";

function hideShowDropdown( received ){
    // hide other dropdowns
    var elements=document.getElementsByClassName("dropdown");
    elements[0].style.display="none";
    elements[1].style.display="none";
    elements[2].style.display="none";
    
    // show currently clicked dropdown
    var targetDropdown=document.getElementById( received.id + "-dropdown");
    console.log(targetDropdown);
    if( currentDropdown === "" ){
        targetDropdown.style.display="block";
        currentDropdown=received.id + "-dropdown";
    }else{
        targetDropdown.style.display="none";
        currentDropdown="";
    }
}

window.onclick = function(e) {
    if( idArray.indexOf(e.target.id) === -1 ){
        var elements=document.getElementsByClassName("dropdown");
        elements[0].style.display="none";
        elements[1].style.display="none";
        elements[2].style.display="none";
        currentDropdown="";
    }
 }