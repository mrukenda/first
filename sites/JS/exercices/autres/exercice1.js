/*Détails
Le taux de TVA utilisé est le taux normal en vigueur en France, il ne bouge pas.
Il faut réafficher toutes les informations : le montant HT, le montant de TVA et le résultat TTC.
Le montant HT est un nombre à virgule (on peut saisir des centimes).
Rappels
Attention au type de la donnée renvoyé par window.prompt() !*/



var HT=60;

var TVA=1.2;

var TTC= 60*1.2;

document.write("<p> Le resultat est : "+HT+"</p>");
document.write("<p> Le resultat est : "+TVA+"</p>");
document.write("<p> Le resultat est : "+TTC+"</p>");

var TTC = parseInt(window.prompt('60'));
var TTC = parseFloat(window.prompt('1.2'));

var result= HT * TVA;

window.alert(result);

