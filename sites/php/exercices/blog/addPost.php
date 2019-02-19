<?php


    $pdo = new PDO('mysql:host=localhost;dbname=blog','root','troiswa');
    $pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare(
        'SELECT
            *
         FROM Author'
);

$query->execute();
$authors = $query->fetchAll(PDO::FETCH_ASSOC);


$query = $pdo->prepare(
        'SELECT
            *
         FROM Category'
);

$query->execute();
$categories = $query->fetchAll(PDO::FETCH_ASSOC);

if (empty($_POST) == false) {
    
    var_dump($_POST);
    $title = $_POST['Title'];
    $content = $_POST['Content'];
    $author_id = $_POST['Author_Id'];
    $category_id = $_POST['Category_Id'];
    
    $query = $pdo->prepare
    (
        '
            INSERT INTO
                Post
                (Title, Content, Author_Id, Category_Id, CreationDate)
            VALUES
                (?, ?, ?, ?, NOW())
        '

    );
    
    $query->execute( [ $title, , $content, $author_id, $category_id ] );
    
    header('Location: index.php');
    exit();
    

}




$template = 'addPost';

include 'layout.phtml';  

?>