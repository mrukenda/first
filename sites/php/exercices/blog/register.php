<?php
session_start();

include 'application/hash.php';

if (empty($_POST) == false) {

     $hashPassword = hashPassword($_POST['password']);

    include 'application/bdd_connexion.php';
    $query = $pdo->prepare
    
    (
        'INSERT INTO users (firstName,
                             lastName, 
                             mail,
                             password,
                             pseudo,
                             role)
        
        VALUES(?,?,?,?,?, "user")
        '
    );

    $query->execute(

        [$_POST['firstName'],
                    $_POST['lastName'],
                    $_POST['mail'],
                    $_POST['pseudo'], 
                    $hashPassword ]

                    );
    $user = $query->fetch(PDO::FETCH_ASSOC);
    var_dump($user);

}

$template='register';
include 'layout.phtml';
?>
