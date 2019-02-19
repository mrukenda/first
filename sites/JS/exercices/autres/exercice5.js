'use strict';
const TAUX_DE_TVA=0.2;
var demanderemise;
var montantHT;
var montantTTC;
var montantTVA;
var pourcentageremise;

montantHT = parseFloat(window.prompt('saisissez montant de votre remise'));
demanderemise=window.prompt('Souhaitez-vous une remise ?');
if (demanderemise == 'oui' || demanderemise =='yes'){
	 pourcentageremise=parseFloat(window.prompt('<p> Veuillez préciser le montant de la remise <p>'));
 }
montantTVA = montantHT * TAUX_DE_TVA / 100;
montantTTC = montantHT + montantTVA;

document.write('<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>');
document.write('<p>Le montant TTC est donc de ' + montantTTC + ' €.</p>');

if(demanderemise == 'oui' || demanderemise == 'yes')
{
    document.write('<p>Une remise de ' + pourcentageremise + '% a été appliquée sur le montant HT.</p>');

} else {

	document.write("<p>Aucune remise n'a été appliquée.</p>");

}


