<?php

class Program{
	private $rectangle;
	private $square;
	private $circle;
	private $ellipse;

	public function __construct(Rectangle $rectangle, Square $square,Circle $circle, Ellipse $ellipse) {
		$this ->rectangle =$rectangle;
		$this ->square=$square;
		$this ->circle=$circle;
		$this ->ellipse=$ellipse;
	}
	public function drawRectangle(){
		$size = $this->rectangle->getSize();
		$position =$this->rectangle->getPosition();
		$style =$this->rectangle->getStyle();

		return '<rect x="'.$position['x'].'"y="'.$position['y'].'"width="'.$size['width'].'"height="'.$size['height'].'" fill="'.$style['fill'].'" opacity="'.$style['opacity'].'"></rect>';
    
	}
	public function drawSquare() {
		$size = $this->square->getSize(); // ['width' =>200,'height' => 100];
    	$position = $this->square->getPosition();
		$style = $this->square->getStyle();

		return '<rect x="'.$position['x'].'"y="'.$position['y'].'"width="'.$size['width'].'"height="'.$size['height'].'" fill="'.$style['fill'].'" opacity="'.$style['opacity'].'"></rect>';

}	public function drawCircle() {

		$size = $this->circle->getSize();
		$position = $this->circle->getPosition();
		$style = $this->circle->getStyle();

		return '<circle cx="'.$position['x'].'" cy="'.$position['y'].'" r="'.$size.'" fill="'.$style['fill'].'" opacity="'.$style['opacity'].'"></circle>';
	}
	public function drawEllipse() {
    	$rx = $this->ellipse->getSize();
		$ry = $this->ellipse->getEllipseSize();
		$position = $this->ellipse->getPosition();
		$style = $this->ellipse->getStyle();

    	return '<ellipse cx="'.$position['x'].'" cy="'.$position['y'].'" rx="'.$rx.'" ry="'.$ry.'" fill="'.$style['fill'].'" opacity="'.$style['opacity'].'"></ellipse>';
    
   }
   
   public function drawTriangle() {
   		$points = $this->triangle->getPosition();
		$style = $this->triangle->getStyle();
   			
        return '<polygon points="'.$points[0].', '.$points[1].', '.$points[2].'" fill="'.$style['fill'].'" opacity="'.$style['opacity'].'"></polygon>';
   
   }
   
   public function drawAll() {
   	  $result = [];
      array_push( $result, $this->drawRectangle() );
	  array_push( $result, $this->drawCarre() );
	  array_push( $result, $this->drawCircle() );
	  array_push( $result, $this->drawTriangle() );
      array_push( $result, $this->drawEllipse() );
      
      return $result;
   }
   

}


?>