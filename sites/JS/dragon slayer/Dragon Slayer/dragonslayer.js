'use strict'

var game={};





function InitializeGame(){

	game.difficulties=requestInteger('Choose a level',1,3);

	switch(game.difficulties){
		case 1:
		game.HPplayer=getRandomInteger(200,250);
		game.HPdragon=getRandomInteger(150,200);
		break;
		case 2:
		game.HPplayer=getRandomInteger(200,250);
		game.HPdragon=getRandomInteger(200,250);
		break;
		case 3:
		game.HPplayer=getRandomInteger(150,200);
		game.HPdragon=getRandomInteger(200,250);
		break;
	}

	game.weapon=requestInteger('Choose a weapon',1,3);
	switch(game.weapon){
			case 1:
			game.weaponRatio=0.5
			break;
			case 2:
			game.weaponRatio=1
			break;
			case 3:
			game.weaponRatio=2
			break;
	}
	game.armor=requestInteger('Choose a armor',1,3);
	switch(game.armor){
			case 1:
			game.armorRatio=1
			break;
			case 2:
			game.armorRatio=1.25
			break;
			case 3:
			game.armorRatio=2
			break;
		}
}




function DamagePlayer()
{
	var degatPlayer;
	switch(game.difficulties){
		case 1:
		degatPlayer=getRandomInteger(25,30)*game.weaponRatio;
		break;

		case 2:
		degatPlayer=getRandomInteger(15,20)*game.weaponRatio;
		break;

		case 3:
		degatPlayer=getRandomInteger(5,10)*game.weaponRatio;
		break;
	}
	return Math.round(degatPlayer);

}

function computeDragonDamagePoint()
{
	var damagePoint;
	
    if (game.difficulties == 1) {
		damagePoint = getRandomInteger(10, 20);
    } else {
    	 damagePoint = getRandomInteger(30, 40);
    }
    
     return Math.round(damagePoint / game.armorRatio);
}

function gameloop()
{
	do{
		var firstHit=getRandomInteger(1,2);
		if (firstHit == 1) {
			console.log('joueur tape');
			game.HPdragon -= DamagePlayer();
			//gameHPdragon = game.HPdragon - DamagePlayer();
		} else {
			console.log('dragon tape');
			game.HPplayer -= computeDragonDamagePoint();

		}
		console.log('dragon : '+game.HPdragon+' PV');
		console.log('jouer : '+game.HPplayer+' PV');
	}
	while(game.HPplayer > 0 && game.HPdragon > 0);
}

function showGameState()
{
    console.log
    (
        'Dragon : ' + game.hpDragon + ' PV, ' +
        'joueur : ' + game.hpPlayer + ' PV'
    );
}


function showGameWinner()
{
	if(game.hpDragon > 0)
    {
    	document.write('<img src="images/dragon.jpg"/>');
        console.log("Le dragon a gagné, vous avez été carbonisé !");
        console.log("Il restait " + game.hpDragon + " PV au dragon");
	} else {
    	document.write('<img src="images/knight.jpg"/>');
        console.log("Vous avez gagné, vous êtes vraiment fort !");
        console.log("Il vous restait " + game.hpPlayer + " PV");
    
    }

}



function startGame() {
	
    initializeGame();
    console.log('Points de vie de départ :');
    showGameState();

    gameLoop();

    showGameWinner();


  startGame();


/*corrigé*/
/*function gameLoop()
{
	var damagePoint;
    var dragonSpeed;
    var playerSpeed;
    game.round = 1;
    
    
    while(game.hpDragon > 0 && game.hpPlayer > 0)
    {
    	dragonSpeed = getRandomInteger(10, 20);
        playerSpeed = getRandomInteger(10, 20);
        
        console.log('Tour numéro ' + game.round);

        if(dragonSpeed > playerSpeed)
        {
        	damagePoint = computeDragonDamagePoint();
			game.hpPlayer -= damagePoint;
            console.log
            (
                'Le dragon est plus rapide et vous brûle, il vous enlève ' +
                damagePoint + ' PV'
            );
        
        } else {
        	damagePoint = computePlayerDamagePoint();
            game.hpDragon -= damagePoint;
        	console.log('Vous êtes plus rapide et frappez le dragon, vous lui enlevez ' + damagePoint + ' PV');
        }

		showGameState();
        
    	game.round ++;
    
    }


}


function showGameState()
{
    console.log
    (
        'Dragon : ' + game.hpDragon + ' PV, ' +
        'joueur : ' + game.hpPlayer + ' PV'
    );
}*/


InitializeGame();
console.log(game);
gameloop();