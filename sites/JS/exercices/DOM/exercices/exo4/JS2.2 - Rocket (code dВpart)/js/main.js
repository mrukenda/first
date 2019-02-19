'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
var time;
var fb=document.getElementById("firingButton");
var car=document.querySelector("#billboard span")
var rocket=document.getElementById("rocket");
var start=10;
var stopcar=document.getElementById("firingButton2");

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

function interval(){
	time=window.setInterval(maf,1000);
	rocket.src="images/rocket2.gif";
}

function maf(){
	start --;
	car.textContent=start;
	if (start==0){
		window.clearInterval(time);
		rocket.src="images/rocket3.gif";
		rocket.classList.add("tookOff");

	}
}
function stop(){
	window.clearInterval(time);

}
/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
fb.addEventListener('click',interval);
stopcar.addEventListener('click',stop);