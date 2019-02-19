
<?php



$trad= ['pain' => 'bread',
	  'citron' => 'lemon',
	  'mangue' => 'mango',
      'goyave' => 'guava'
 ];

/*array_key_exists('word', $_POST) == true)
{
	$word =  strtolower($_POST['word']);
    var_dump($word);*/
    
function traduction($word,$trad,$langue){
	if($langue =='toFrench'){
		if(array_key_exists($word,$trad) == true){
		echo $trad[$word];
	} else {
		echo 'Ce mot existe pas';
	}
}else if($langue =='toEnglish'){
	if(in_array($word,$trad) == true){
		array_search($word,$trad);
}else {
		echo 'Ce mot existe pas';
	}
}
}



	
	if(array_key_exists('mot',$trad) == true)
{
	$word =  strtolower($_POST['mot']);
	$langue = $_POST['choix'];
	var_dump($word);
    translate($word,$trad,$langue);
}





include "exercicetrad.phtml"



?>