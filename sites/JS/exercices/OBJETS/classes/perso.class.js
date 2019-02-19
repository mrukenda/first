var Perso = function(name, lifepnts, attackpnts, defpnts, magicpnts ){

	this.name = name;
	this.lifepnts = lifepnts;
	this.attackpnts = attackpnts;
	this.defpnts = defpnts;
	this.magicpnts = magicpnts;
}

Perso.prototype.attaquer = function(perso) {

	var degats = this.attackpnts - perso.defpnts;

	if (degats < 10) {
		
		console.log(perso.name +'ne sent plus rien....' );
		degats = 10
	}
	perso.lifepnts -= degats
    
	console.log(this.name +' Attaque, il enlève '+ degats + ' lifepnts '+ perso.name );

	console.log(perso.name +' a  '+ perso.lifepnts+ ' lifepnts' );
}


Perso.prototype.defendre = function() {
		var ratio =  Math.round(this.defpnts * Math.random());

		console.log(this.name+' augmente sa defense de '+ ratio/2 + ' point ');
		this.defpnts += ratio/2;

		console.log(this.name +'a une defense à :'+ this.defpnts);
}


Perso.prototype.sort = function(perso) {

	if (this.magicpnts > 0) {
		var degats = getRandomInteger(1, this.magicpnts);
		console.log(this.name +  ' jete un sort,il enlève '+ degats + ' hp a '+ perso.name);
		perso.lifepnts -= degats;
		this.magicpnts -=  degats;
		console.log(perso.name +' a  '+ perso.lifepnts+ ' lifepnts' );
	} else {
		console.log('Vous n avez plus de point de magie....')
	}

}


