'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
var baroutils=document.getElementById("toolbar-toggle");
var buttons=document.querySelector(".toolbar ul");
var arrows=document.querySelector("#toolbar-toggle i");
var next = document.getElementById('slider-next');
var previous= document.getElementById('slider-previous');
var random = document.getElementById('slider-random');
var play = document.getElementById('slider-toggle');
var index=0;
var fig = document.querySelector('#slider figcaption');
var images= [
	{ image: '1.jpg', legend: 'Street Art'          },
    { image: '2.jpg', legend: 'Fast Lane'           },
    { image: '3.jpg', legend: 'Colorful Building'   },
    { image: '4.jpg', legend: 'Skyscrapers'         },
    { image: '5.jpg', legend: 'City by night'       },
    { image: '6.jpg', legend: 'Tour Eiffel la nuit' }
 ];

 console.log(images[2].image);
var picture=document.querySelector('#slider img');
var isPlaying = false;
var timer;
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function show(){
	
	buttons.classList.toggle('hide');
	arrows.classList.toggle('fa-arrow-down');
    arrows.classList.toggle('fa-arrow-right');

} 

function suivant(){
	if( index>=images.length-1) {
		index = 0
	} else {
		index++
	}
	
	picture.src =images[index].image;
	fig.textContent = images[index].legend;
}
function retour(){
	   if (index <= 0 ) {
    
    	index = images.length - 1 ;
	} else {
		index--
	}
	picture.src =images[index].image;
	fig.textContent = images[index].legend;
}


function goToRandom() {

	index = getRandomInteger(0, images.length -1 );
    
    picture.src = images[index].image;
	fig.textContent = images[index].legend;   

}

function goToPlay() {
	if (isPlaying == false) {
    
    	timer = window.setInterval(suivant, 2000);
        isPlaying = true;
        
    } else {
    	window.clearInterval(timer);
        isPlaying = false;

    }
    
    var faPlay = document.querySelector('#slider-toggle i');
    faPlay.classList.toggle('fa-play');
    faPlay.classList.toggle('fa-pause');

}
function onPushButtons(event) {
	
    console.log(event);
    
    if (isPlaying == true) {
        goToPlay();	
    }
    
    switch(event.keyCode) {
    	
        case 39:
        goToNext();
        break;
        
        case 37:
        goToPrev();
        break
        
        case 82:
        goToRandom();
        break;
        
        case 32:
        goToPlay();
        break
    }


}

picture.src = images[index].image;
fig.textContent = images[index].legend;   
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

previous.addEventListener('click',retour);
baroutils.addEventListener('click',show);
next.addEventListener('click', suivant);
random.addEventListener('click', goToRandom);
play.addEventListener('click', goToPlay);
document.addEventlistener('keyup', onPushButtons);
