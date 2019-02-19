'use strict';

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/




function myFunction(response) {

    console.log(response);
    $('#target').html(response);
}


function recupJson(response) {
	console.log(response);

	$('#target').empty();
	$('#target').append('<ul>');

	for(var i= 0; i < response.length; i++) {
		$('#target ul').append('<li> Nom : '+response[i].firstName+', tel : '+response[i].phone+'</li>');
	}
}

function onClickExecute(){
	var choice = $('input[name=what]:checked').val();
	console.log(choice);

	if (choice == '1') {
		$.get('php/1-get-html-article.php', myFunction);
	} else if (choice == '2') {
		$.getJSON('php/2-get-json-data.php', recupJson);
	} else (choice == '3')
		$.get('php/3-get-html-movies.php', myFunction);
	
}

$('#run').on('click',onClickExecute);
