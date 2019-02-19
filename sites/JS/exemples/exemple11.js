function sayHello()
{ 
	document.write('<p>Bonjour à toutes et à tous !</p>');
	document.write('<p>Surtout Rukenda!</p>');
}
	
sayHello();


/*function sayHelloByName(firstName, lastName)
{
	document.write('<p>Bonjour ' + firstName + ' ' + lastName + ' !</p>');
}
sayHelloByName('Rukenda','MAUVAIS');

var firstName = window.prompt('firstName ?');

var lastName = window.prompt('laststName ?');

function sayHello()
{
	return'Salut toi';
}
var msg =sayHello;
document.write('<h2>' + msg + '</h2>');*/

function addition(num1,num2){
	var resultat=num1+num2;
	return resultat;
}

var test = addition (8,7);
var tab = ['canard','chien','cochon'];

console.log(tab);

tab.push('souris');

console.log(tab);

tab.push('oie');

console.log(tab);


tab.indexOf('chien') // 1

tab.indexOf('poule')// -1

tab.splice(2, 1); // supprime chat

console.log(tab);

