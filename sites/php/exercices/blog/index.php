<?php
session_start();
$pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');
$pdo->exec('SET NAMES UTF8');
$query = $pdo->prepare(
	' SELECT
        Post.Id,
        Title,
        Content,
        CreationDate,
        FirstName,
        LastName
    FROM
        Post
    INNER JOIN
        Author
    ON
        Post.Author_Id = Author.Id
    ORDER BY
        CreationDate DESC'

);

$query->execute();
$posts = $query->fetchAll(PDO::FETCH_ASSOC);
$pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');
$pdo->exec('SET NAMES UTF8');
$query = $pdo->prepare 
(
	'SELECT * FROM `Post` INNER JOIN `Author` WHERE Author.author_id=Post.author_id'
);
$query->execute();
$thePosts = $query->fetchAll(PDO::FETCH_ASSOC);



$template = 'index';
include 'layout.phtml';
?>