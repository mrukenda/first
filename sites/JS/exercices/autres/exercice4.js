
var voiture = {}; // new Object()



voiture.marque = 'mercedes';
voiture.fab = 1930;
voiture.achat = '2017';
voiture.passager1= 'Rukenda';
voiture.passager2= 'Naala';
voiture.passager3= 'Kezz-I';

var achat= new Date('2017-01-25');
var fab = new Date ('1930-03-17');



console.log(voiture);


console.log(voiture.marque);
console.log(voiture.fab);
console.log(voiture.achat);
console.log(voiture.passager1);
console.log(voiture.passager2);
console.log(voiture.passager3);

document.write('<ul><li>'+voiture.marque+'</li><li>'+voiture.fab+'</li><li>'+voiture.achat+'</li><li>'+voiture.passager1+'</li><li>'+voiture.passager2+'</li><li>'+voiture.passager3+'</li></ul>');
/*CORRIGE*/

var myCar = new Object();

myCar.brand         = 'Alfa Roméo';
myCar.buyDate       = new Date('2013-06-20');
myCar.passengers    = new Array();
myCar.passengers[0] = 'Nicolas';
myCar.passengers[1] = 'Charlotte';
myCar.year          = 2012;


document.write('<ul>');
document.write('<li>Marque : ' + myCar.brand + '</li>');
document.write('<li>Année de fabrication : ' + myCar.year + '</li>');
document.write('<li>Date de l\'achat : ' + myCar.buyDate.toDateString() + '</li>');
document.write('<li>Passager 1 : ' + myCar.passengers[0] + '</li>');
document.write('<li>Passager 2 : ' + myCar.passengers[1] + '</li>');
document.write('</ul>');


myCar = {
			brand: 'Alfa Roméo',
            passengers : ['Nico', 'Nanard'],
            year: 2012

		}