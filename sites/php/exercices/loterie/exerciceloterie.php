<?php







$tabresult= array();

function aleatoire ()
{
	$tabresult= array();

	while (count($tabresult)<6)
	{
		$nombre = mt_rand(1,49);
		if ( in_array($nombre, $tabresult) == true)
		{
			$nombre = mt_rand(1,49);                                         
		}else {
			array_push($tabresult,$nombre);
		}
	}
	return $tabresult;

	
}

$tabresult = aleatoire();


include "exerciceloterie.phtml"


?>