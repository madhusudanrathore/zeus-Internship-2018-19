var runnerForwardDistances=[25,25,25,25];
var runnerReverseDistances=[25,25,25,25];

class Runner{
	constructor(playNum){
		this.playerIndex=playNum;
		this.runnerProgress="runner-progress-" + this.playerIndex;
		this.infoTableString="information-table-player-" + this.playerIndex;
		console.log(this.infoTableString);
		this.width=0, this.rightWidth=0, this.iteration=1;
		this.reverseWidth=0;
	}
	addTableData(reverse){
		this.tableElement=document.getElementById(this.infoTableString);
		var row, cell1, cell2;
		row=this.tableElement.insertRow(-1);
		cell1=row.insertCell(0);
		cell2=row.insertCell(1);
		cell1.innerHTML=this.iteration;
		if(reverse){
			cell2.innerHTML=1000+this.rightWidth;
		}else{
			cell2.innerHTML=this.width;
		}
	}
	increaseWidth(timeControlVariable){
		this.width += runnerForwardDistances[this.playerIndex];
		if(this.width > 1000 ){
			this.reverseRun(timeControlVariable);
		}
		if( (this.iteration<=10) && (this.width%100 === 0)){
			this.addTableData(false);
			this.iteration++;
			document.getElementById(this.runnerProgress).style.marginLeft=(this.width+'px');
		}
	}
	reverseRun(timeControlVariable){
		if(this.iteration === 11){
			document.getElementById(this.runnerProgress).src="../images/runningLeft.png";
			document.getElementById(this.runnerProgress).style.marginRight=('0px');
		}
		this.rightWidth+=runnerReverseDistances[this.playerIndex];
		this.width=this.width-25;
		if(this.rightWidth > 1000){
			clearInterval(timeControlVariable);
		}
		if( (this.iteration <= 20) && (this.rightWidth%100 === 0)){
			console.log(this.iteration, this.rightWidth, this.width);
			this.addTableData(true);
			this.iteration++;
			document.getElementById(this.runnerProgress).style.marginRight=(this.rightWidth+'px');
			document.getElementById(this.runnerProgress).style.marginLeft=(this.width+'px');
		}
	}
}

function run(timeControlVariable, runner1, runner2, runner3, runner4){
	runner1.increaseWidth( timeControlVariable);
	runner2.increaseWidth( timeControlVariable);
	runner3.increaseWidth( timeControlVariable);
	runner4.increaseWidth( timeControlVariable);
}