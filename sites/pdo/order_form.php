<?php

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT 
    	customerName,contactLastName,contactFirstName, addressLine1,city
    
     FROM 
     	customers
     
     INNER JOIN orders ON orders.customerNumber=customers.customerNumber
     	
     WHERE orderNumber =?'
     
     
);

$query->execute( [ $_GET['orderNumber'] ] );

$customer = $query->fetch(PDO::FETCH_ASSOC);

var_dump($customer);

include "order_form.phtml";

?>