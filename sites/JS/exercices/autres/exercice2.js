var day = new Date();


var week = new Array(); 

week[0] = "Dimanche";
week[1] = "Lundi";
week[2] = 'Mardi';
week[3] = 'Mercredi';
week[4] = 'Jeudi';
week[5] = 'Vendredi';
week[6] = 'Samedi';

console.log(week[3]);

var month = new Array(); 

month[0] = "Janvier";
month[1] = "Février";
month[2] = "Mars";
month[3] = "Avril";
month[4] = "Mai";
month[5] = "Juin";
month[6] = "Juillet";
month[7] = "Aout";
month[8] = "Septembre";
month[9] = "Octobre";
month[10] = "Novembre";
month[11] = "Décembre";

console.log(month[10]);

var date = new Date ();
console.log(date);

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());



document.write('<p>Nous sommes le : '+week[date.getDay()]+' '+date.getDate ()+' '+ month[date.getMonth()]+' '+date.getFullYear()+'</p>');

/*corrigé*/

var dayNames   = new Array(); // []
dayNames[0] = 'Dimanche';
dayNames[1] = 'Lundi';
dayNames[2] = 'Mardi';
dayNames[3] = 'Mercredi';
dayNames[4] = 'Jeudi';
dayNames[5] = 'Vendredi';
dayNames[6] = 'Samedi';


var monthNames = [];
monthNames[0]  = 'Janvier';
monthNames[1]  = 'Février';
monthNames[2]  = 'Mars';
monthNames[3]  = 'Avril';
monthNames[4]  = 'Mai';
monthNames[5]  = 'Juin';
monthNames[6]  = 'Juillet';
monthNames[7]  = 'Août';
monthNames[8]  = 'Septembre';
monthNames[9]  = 'Octobre';
monthNames[10] = 'Novembre';
monthNames[11] = 'Décembre';

var today = new Date();

document.write('Nous sommes le ' + dayNames[today.getDay()] + ' ');  // dayNames[4]
document.write(today.getDate() + ' ');
document.write(monthNames[today.getMonth()] + ' ');
document.write(today.getFullYear() + '.');


