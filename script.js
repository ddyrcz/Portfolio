var main = function(){

	timer();
}

function timer(){
	var date = new Date();
	var dayOfWeek = date.getDay();
	
	switch(dayOfWeek){
		case 0: 
			document.getElementById("timer").innerHTML = 'Niedziela ' +  getCurrentTime();
			break;
		case 1: 
			document.getElementById("timer").innerHTML = 'Poniedziałek '+  getCurrentTime();
			break;
		case 2: 
			document.getElementById("timer").innerHTML = 'Wtorek ' +  getCurrentTime();
			break;
		case 3: 
			document.getElementById("timer").innerHTML = 'Środa ' +  getCurrentTime();
			break;
		case 4: 			
			document.getElementById("timer").innerHTML = 'Czwartek ' + getCurrentTime();
			break;
		case 5: 
			document.getElementById("timer").innerHTML = 'Piątek ' +  getCurrentTime();
			break;
		case 6: 
			document.getElementById("timer").innerHTML = 'Sobota ' +  getCurrentTime();
			break;
	}

	setTimeout("timer()", 1000);
}

 function getCurrentTime(){
	 
	 var date = new Date();
	 
	 var hours = date.getHours();
	 if(seconds<10) hours = '0' + hours;
	 
	 var minutes = date.getMinutes();
	 if(minutes<10) minutes = '0' + minutes;

	 var seconds = date.getSeconds();
	 if(seconds<10) seconds = '0' + seconds;

	 var currentTime = hours + ':' + minutes + ':' + seconds;

	 return currentTime;
 }


$(document).ready(main);