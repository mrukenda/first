'use strict';

var photos = document.querySelectorAll('.photo-list li');
var total  = document.querySelector('#total em');

function onClickListItem()
{
	this.classList.toggle('selected');
	var selectedPhotos = document.querySelectorAll('.photo-list li.selected');
	total.textContent = selectedPhotos.length;
}




for(index = 0; index < photos.length; index++)
{
    photos[index].addEventListener('click', onClickListItem);
}



setTimeout(myFunction, 10000);