<?php

include "classes/shape.class.php";
include "classes/rect.class.php";
include "classes/square.class.php";
include "classes/circle.class.php";
include "classes/ellipse.class.php";
include "classes/program.class.php";

$rectangle = new Rectangle ('50','20','200','100','firebrick','0.75');
$square = new Square ('400','200','200','pink','0.5');

$circle = new Circle ('300','350','190','green','0.25');

$ellipse = new Ellipse('600', '250', '40', '80', 'blue', '0.75');

$triangle = new Triangle('60 60', '200 250', '60 250', 'purple', '0.75');

$prog = new Program($rectangle, $carre, $circle, $ellipse, $triangle);

$rec = $prog -> drawRectangle();
var_dump($rec);
$squ = $prog -> drawSquare();
var_dump($squ);
$cir = $prog -> drawCircle();
var_dump($cir);
$ell = $prog -> drawEllipse();
var_dump($ell);
$tri = $prog -> drawTriangle();
var_dump($ell);

include 'index.phtml';






?>