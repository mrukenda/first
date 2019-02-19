<?php
$idPost =$_GET['id'];

$pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');
$pdo->exec('SET NAMES UTF8');
$query = $pdo->prepare 
(
	'SELECT * FROM `Post` INNER JOIN `Author` ON Author.author_id=Post.author_id WHERE post_id=?'
);
$query->execute([$idPost]);
$postDetail = $query->fetch(PDO::FETCH_ASSOC);



$template = 'post';

include 'layout.phtml';


?>