/*var pierre;
var feuille;
var ciseaux;
var vous;
var PC;
var resultat;

pierre=1;
feuille= 2;
ciseaux = 3; 
PC =Math.random (3-1+1);

vous = window.prompt('<p>choisissez pierre, feuille ou ciseaux </p>').toLowerCase();

pierre>ciseaux;
ciseaux>feuille;
feuille>pierre;

if (PC=2){
	document.write(' L\'ordi a choisi feuille');
}else if (PC=1){
	document.write('L\'ordi a choisi pierre');
}else{
	document.write('L\'ordi a choisi ciseaux');
}

if (vous=2){
		document.write('vous avez choisi feuille');
}else if (vous=1){
	document.write('vous avez choisi pierre');
}else {
	document.write('vous avez choisi ciseaux');
}
switch(vous){
	case 'pierre':
		if (PC=1){
			document.write('egalite');
		}else if (PC=2){
		document.write('You lose');
	    }else {
	    document.write('You right');
	    }
	break;

	case 'feuille':
		if (PC=1){
			document.write('you won');
		}else if (PC=2){
		document.write('egalite');
	    }else {
	    document.write('you lose');	
	    }
	break;

	case 'ciseaux':
		if (PC=1){
			document.write('you lose');
		}else if (PC=2){
		document.write('you won');
	    }else {
	    document.write('eagalite');	
	    }
	break;
}

	/*
	switch(PC){
	case 'pierre':
		if (vous=1){
			document.write('egalite');
		}else if (vous=2){
		document.write('You lose');
	    }else {
	    document.write('You right');	
	    }
	break;

	case 'feuille':
		if (vous=1){
			document.write('you won');
		}else if (vous=2){
		document.write('egalite');
	    }else {
	    document.write('you lose');	
	    }
	break;
	case 'ciseaux':
		if (vous=1){
			document.write('you lose');
		}else if (vous=2){
		document.write('you won');
	    }else {
	    document.write('egalite');	
	    }
	break;


}



/*if (vous==PC){
	document.write('EGALITE !');
}else {

}
*/
'use strict';

var computer;
var player;
var random;

player = window.prompt('Que choisissez-vous : pierre, feuille ou ciseau ?');
player = player.toLowerCase();

random = Math.random();

if(random < 1 / 3)          // Entre 0.00 et ~0.33 : l'ordinateur sélectionne la pierre
{
    computer = 'pierre';
}
else if(random < 2 / 3)     // Entre ~0.33 et ~0.66 : l'ordinateur sélectionne la feuille
{
    computer = 'feuille';
}
else                        // Au-delà de ~0.66 : l'ordinateur sélectionne le ciseau
{
    computer = 'ciseau';
}

document.write("<p>Choix de l'ordinateur : <strong>" + computer + '</strong></p>');


if(computer == player)
{
    document.write('<p>Vous avez choisi la même chose : égalité !</p>');
}
else
{
	switch(computer) {
    	case 'pierre': 
            if(player == 'feuille')
            {
                document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>');
            }
            else // player == 'ciseau'
            {
                document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>');
            }
        break;
        
        case 'feuille':
            if(player == 'pierre')
            {
                document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>');
            }
            else // player == 'ciseau'
            {
                document.write('<p>Le ciseau découpe la feuille : vous gagnez !</p>');
            }
        break;
        
        case 'ciseau':
            if(player == 'pierre')
            {
                document.write('<p>La pierre écrase le ciseau : vous gagnez !</p>');
            }
            else // player == 'feuille'
            {
                document.write('<p>La feuille est découpée par le ciseau : vous perdez !</p>');
            }
        break;
    }
}


</script>
