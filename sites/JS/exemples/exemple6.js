/*var age;
var isThirtyYearsOld;
var isAdult;
var isNotCentennial;

age = 35;

isThirtyYearsOld = (age == 30); // false
isThirtyYearsOld = (age == 35); // true

isNotCentennial  = (age != 100); // true

age = 100;
isNotCentennial  = (age != 100); // false


age = 18;

isAdult = (age > 18); // false
isAdult = (age >= 18); // true

isAdult = (age < 18); // false
isAdult = (age <= 18); // true

var string = "coucou";*/

var age = parseInt(window.prompt(21));

var firstName = 'Tom';

if (age > 18) {
	document.write('<p>Vous êtes majeur.</p>');

}
else {

	document.write('<p>Vous n\'êtes pas majeur.</p>');
}

var name='Rukenda';
if (name=='Rukenda'){
	document.write('<p>Vous êtes Rukenda</p>');
}else if(name=='Eliana'){
	document.write('<p>Vous êtes Eliana</p>');

}else if (name==KezzI){
	document.write('<p>Vous êtes KezzI</p>');

}else {
	document.write('<p>Qui êtes vous ?</p>');

}else {
	document.write('<p>Vous n\'êtes pas majeur.</p>');
}

/*plusieurs conditions*/

var age = parseInt(window.prompt(21));

var firstName = 'Tom';

if (firstName == 'Tom' && age >= 18 ) {

	document.write('<p>Vous êtes majeur et votre nom est Tom</p>');

}

if ((firstName == 'Tom' || firstName == 'Pierre') && age > 17 ) {

		document.write('<p>Vous êtes Tom ou Pierre</p>');

}






string != 'bonjour'; // true



// condition 