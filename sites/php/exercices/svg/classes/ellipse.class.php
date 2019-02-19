<?php

class Ellipse extends Circle{
	private $x2;
	private $y2;

	public function __construct($x, $y,$r, $x2, $y2, $fill, $opacity)
{
	parent::__construct($x, $y,$r, $x2, $y2, $fill, $opacity);
   	    $this->x2 = $x2;
   	    $this->y2 = $y2;
}
	

}







?>