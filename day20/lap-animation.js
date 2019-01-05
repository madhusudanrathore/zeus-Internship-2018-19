function animateRunning(){
	var runner1=new Runner(0);
	var runner2=new Runner(1);
	var runner3=new Runner(2);
	var runner4=new Runner(3);

	var timeControlVariable=setInterval(function(){
		run( timeControlVariable, runner1, runner2, runner3, runner4 );
	}, 100);
}