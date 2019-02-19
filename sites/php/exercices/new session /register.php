<?php
session_start();

include 'classes/database.class.php';
include 'classes/users.class.php';


if(empty($_POST) == false) {

	var_dump($_POST);
    
    $user = new User();
    
    $user->addUser($_POST);


}

$template = 'register';
include 'layout.phtml';

?>