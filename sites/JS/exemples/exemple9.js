var tab = ['chien', 'chat', 'poisson', 'hamster', 'cochon d\'inde', 'rat', 'ragondin'];


console.log(tab.length); // 7


for(var i = 0; i < tab.length; i++) {

	document.write('<p>'+tab[i]+'</p>');

}
var i = 0;

while (i < tab.length) {
	
    document.write('<p>'+tab[i]+'</p>');
	i+= 2;

}
for (var i = 30; i >= 0; i--) {
	document.write('<p>'+i+'</p>');

}



//methode FOR

/*
for(var i = 0; i < tab.length; i++) {

	document.write('<p>'+tab[i]+'</p>');

}*/
