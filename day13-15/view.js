var arr=[
    { "firstname": "A", "lastname": "U", "gender": "F", "otherDetails": "I like .net!" },
    { "firstname": "B", "lastname": "V", "gender": "M", "otherDetails": "I like java!" },
    { "firstname": "C", "lastname": "W", "gender": "M", "otherDetails": "I like SQL!" },
    { "firstname": "D", "lastname": "X", "gender": "M", "otherDetails": "I like Flash!" },
    { "firstname": "E", "lastname": "Y", "gender": "M", "otherDetails": "I like Javascript!" },
    { "firstname": "F", "lastname": "Z", "gender": "F", "otherDetails": "I like C#!" },
];
var myJSON=JSON.stringify(arr);

function addData( a, b, c, d ){

    var tempFn=a, tempLn=b, tempG=c, tempOd=d;
    var temp=",{\"firstname\":\"" + tempFn + "\", \"lastname\":\"" + tempLn + 
    "\",\"gender\":\"" + tempG + "\",\"otherDetails\":\"" + tempOd + "\"}";

    myJSON = [myJSON.slice(0, myJSON.length-1), temp, myJSON.slice(myJSON.length-1)].join('');
    
    console.log(myJSON);
}
var index=0;
function printView(){
    var viewData=JSON.parse(myJSON);
    console.log(viewData);
    var dataLength=viewData.length;

    var table = document.getElementById("table-view"), row, cell1, cell2, cell3, cell4;
    table.style.display="inline-block";

    for( ; index<dataLength; ++index ){
        console.log(viewData[index]);

        row = table.insertRow(-1); // -1 indicates append at end
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);

        cell1.innerHTML = viewData[index].firstname;
        cell2.innerHTML = viewData[index].lastname;
        cell3.innerHTML = viewData[index].gender;
        cell4.innerHTML = viewData[index].otherDetails;
    }
}