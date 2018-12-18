// implement using class


var width=0, iteration=0;
var runnerProgress, tableElement, infoTableString="information-table-player";

function increaseWidth( imgElement, width ){

}

function addTableData( tableElement ){
	row = tableElement.insertRow(-1);
	cell1 = row.insertCell(0);
	cell2 = row.insertCell(1);

	cell1.innerHTML = iteration;
	cell2.innerHTML = width;
}

function run( timeControlVariable ){
	// runnerProgress=document.getElementById("runner-progress-1");
	document.getElementById("runner-progress-1").style.marginLeft=(width+'px');
	document.getElementById("runner-progress-2").style.marginLeft=(width+'px');
	document.getElementById("runner-progress-3").style.marginLeft=(width+'px');
	document.getElementById("runner-progress-4").style.marginLeft=(width+'px');
	width += 25;
	if( width > 1000 ){
		clearInterval(timeControlVariable);
	}
	if( iteration<10 && ( width%100 === 0 ) ){
		// console.log( iteration++ );
		addTableData( document.getElementById( infoTableString + "1" ) );
		addTableData( document.getElementById( infoTableString + "2" ) );
		addTableData( document.getElementById( infoTableString + "3" ) );
		addTableData( document.getElementById( infoTableString + "4" ) );
	}
}