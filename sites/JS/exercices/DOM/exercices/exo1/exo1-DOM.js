'use strict'

var rectangle = document.querySelector('.rectangle');
var button = document.getElementById('toggle-rectangle');

function disparition (){

	rectangle.classList.toggle('hidden');
}

function interieure(){

	rectangle.classList.toggle('important');

}

function doubleclick(){

	rectangle.classList.toggle('good');

}

function sup(){

	rectangle.classList.remove('hidden','important','good');

}
button.addEventListener('click', disparition);
rectangle.addEventListener('mouseover', interieure);
rectangle.addEventListener('dblclick', doubleclick);
rectangle.addEventListener('remove',disparition,interieure,doubleclick,sup);
