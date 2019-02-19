<?php

class UserModel {

	public function signUp( $lastname, $firstname, $email, $password, $birthDate, $address, $city, $zipCode, $phone ) {
    	$database = new Database();
    	
        $hashPassword = $this->hashPassword($password);
        
    	$sql = 'INSERT INTO User (  LastName,
									FirstName,
									Email,
									Password,
									BirthDate,
									CreationTimestamp,
									Address,
									City,
									ZipCode,
									Phone )
				VALUES (?, ?, ?, ?, ?, NOW(), ?, ?, ?, ?)';
                
                
         $values = [$lastname, $firstname, $email, $hashPassword, $birthDate, $address, $city, $zipCode, $phone];
         
         $database->executeSql($sql, $values);
    
    }


	private function hashPassword($password)
    {
        
        $salt = '$2y$11$'.substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);

        return crypt($password, $salt);
    }




}

