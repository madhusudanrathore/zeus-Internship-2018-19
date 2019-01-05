var timeControlVariable, width=0, iteration=0;

function startRunning(){
	timeControlVariable=setInterval(function(){ run(); }, 100);
}
function run(){
	var runnerProgress=document.getElementById("runner-progress");
	var goBtn=document.getElementById("go-btn");
	var tableElement=document.getElementById("information-table");
	var rows=tableElement.getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;

	// console.log( width );
	console.log(rows);
	runnerProgress.style.marginLeft=(width+'px');
	width += 25;
	if( width > 1000 ){
		goBtn.innerHTML="RESET";
		clearInterval(timeControlVariable);
	}
	if( iteration<10 && ( width%100 === 0 ) ){
		iteration++;
		row = tableElement.insertRow(-1); // -1 indicates append at end
		cell1 = row.insertCell(0);
		cell2 = row.insertCell(1);
	
		cell1.innerHTML = iteration;
		cell2.innerHTML = width;
	}
}
function abc(){
	alert("asdsa");
}