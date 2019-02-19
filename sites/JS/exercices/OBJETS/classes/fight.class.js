var Program = function(){

	this.ruk = new Perso('Rukenda', 200,125,50,10 );
	this.kez = new Perso('Kezz-I', 300,150,55,10);
	
	$('#attaquer').on('click', this.onClickAttaque.bind('hello'));

	$('#defendre').on('click', this.onClickAttaque.bind('hello'));

	$('#sort').on('click', this.onClickAttaque.bind('hello'));

}


Program.prototype.onClickAttaque = function(event) {
	event.preventDefault();

	console.log(this);

}

Program.prototype.affichage = function() {

	if(this.ruk.lifepnts > 0 && this.kez.lifepnts > 0) {
    
    	$('#perso1').text(this.ruk.name+ ' : '+this.kez.lifepnts+' HP, attaque : ' + this.ruk.attackpnts + ', defense : '+ this.ruk.defpnts +', magie : '+ this.ruk.magicpnts);
        
		$('#perso2').text(this.nanard.name+ ' : '+this.nanard.hp+' HP, attaque : ' + this.nanard.attack + ', defense : '+ this.nanard.defense +', magie : '+ this.nanard.magie);
    
    
    } else {
    	$('#commande').css('display', 'none');
    
    	if(this.gege.hp > 0) {
        	$('#affichage').html('<p>Victoire de : '+this.gege.name+'</p>');

        } else {
        	$('#affichage').html('<p>Victoire de : '+this.nanard.name+'</p>');
        }
    
    }


}



