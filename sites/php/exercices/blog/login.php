
<?php

session_start();
include 'application/hash.php';

$error = false;
$message = '';

if(empty($_POST) === false) {
	
	include 'application/bdd_connection.php';
   
	$query = $pdo->prepare
	(
	    'SELECT
	        *
	     FROM users Where mail = ?'
	);

	$query->execute( [ $_POST['mail'] ]);
	$user = $query->fetch(PDO::FETCH_ASSOC);
    
    
	if ($user == false) {
    
    
    } else if ( verifyPassword(00$_POST['password'] == $user['password'] ) {
    
    	$_SESSION['mail'] = $user['mail'];
		$_SESSION['firstName'] = $user['firstName'];
		$_SESSION['lastName'] = $user['lastName'];
		$_SESSION['pseudo'] = $user['pseudo'];
		$_SESSION['role'] = $user['role'];

		header('Location: index.php');
		exit();
    
    
    } else {
    
    
    	$error = true;
		$message = "Votre mot de passe est incorrect...";
    
    }

	/*$pdo = new pdo('mysql:host=localhost;dbname=blog','root','troiwa');
	$pdo->exect('SET NAMES UTF8');
	$query = $pdo->prepare(
		'SELECT* FROM users WHERE Mail=?');
	$query->execute([$_POST['email']]);
	$user = $query->fetch(PDO::FETCH-ASSOC);

	if()*/
 }
    
$template = 'login';
include 'layout.phtml';
?>