'use strict';

var number1= parseFloat(window.prompt('<p>saisissez le 1er nombre</p>'));
var number2= parseFloat(window.prompt('<p>saisissez le 2eme nombre </p>'));
var operation= parseFloat(window.prompt('<p>saisissez le l\'operation </p>'));

if (isNaN(number1) == false && isNaN(number2) == false){

switch(operation){
	case '+':
	case 'addition':
	var resultat1 = number1 +number2;
	document.write('Le résultat est'+resultat1);
	break;

	case '-':
	case 'soustraction':
	var resultat2 =number1-number2;
	document.write('<p>Le résultat est'+resultat2);
	break;

	case '/':
	case 'division':
	if (number2==0){
		document.write('<p>IMPOSSIBLE</p>');
	} else {
	var resultat3 =number1/number2;
	document.write('<p>Le résultat est'+resultat3);
	}

	break;

	case '*':
	case 'multiplication':
	var resultat4=number*number2;
	document.write('<p>Le résultat est'+resultat4);
	break;

	case '^':
	case 'puissance':
	var resultat5= number1 ** number2;
	document.write('<p>Le résultat est'+resultat5);
	break;

	default:
    document.write('Operation impossible');
    break;

 }
}else{
	document.write('Il te faut des chiffres.')
}
ou
if(isNaN(result) == true)
{
	document.write("<p>Vous n'avez pas saisi deux nombres !</p>");
	result = undefined;

}


