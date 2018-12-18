var timeControlVariable, width=0, iteration=0;

function startRunning(){
	timeControlVariable=setInterval(function(){ run(); }, 100);
}
function run(){
	var runnerProgress=document.getElementById("runner-progress");
	var tableElement=document.getElementById("information-table");

	// console.log( width );
	runnerProgress.style.marginLeft=(width+'px');
	width += 25;
	if( width > 1000 ){
		clearInterval(timeControlVariable);
	}
	if( iteration<10 && ( width%100 === 0 ) ){
		console.log( iteration++ );
		row = tableElement.insertRow(-1); // -1 indicates append at end
		cell1 = row.insertCell(0);
		cell2 = row.insertCell(1);
	
		cell1.innerHTML = iteration;
		cell2.innerHTML = width;
	}
}