/*var listecourse=[];
var produit1=window.prompt('1er produit');
var produit2=window.prompt('2nd produit');
var produit3=window.prompt('3e produit');
var produit4=window.prompt('4e produit');
var produitsup=window.prompt('ajout produit');

function ajout(produitplus)
{
	listecours.push(produitn);
}
listecourse.ajout(produit1);
listecours.ajout(produit2);
listecours.ajout(produit3);
listecours.ajout(produit4);

console.log(listecourse.ajout());

function retrait(produitmoins){
	console.log(listecourse.retrait());
	listecourse.slice(produitmoins);
}*/

var shoppingList = new Array();

function addItem(item)
{

	shoppingList.push(item);

}

function displayShoppingList()
{

	console.log('La liste contient ' + shoppingList.length + ' produit(s).');
	console.log(shoppingList);
    
    document.write('<ul>');
    
    for (var i = 0; i < shoppingList.length; i++) {
    
    	document.write('<li>'+shoppingList[i]+'</li>')
    	
    }
    
    document.write('</ul>');
}

function removeAllItems()
{

	shoppingList = [];
    
    //shoppinglist(0, shoppingList.length -1);
    
}


function removeItem(item)
{
	var index = shoppingList.indexOf(item);
    
    if(index == -1)
	{
    	console.log("ERREUR : le produit " + item + " n'existe dans la liste de courses");

    } else {
    	shoppingList.splice(index, 1);
    }
    

}





console.clear();


addItem('Fraises');
addItem('Poulet');
addItem('Tournevis');
addItem('Artichaut');

displayShoppingList()


removeItem(window.prompt('Quel produit de la liste de courses souhaitez-vous supprimer ?'));
displayShoppingList();



