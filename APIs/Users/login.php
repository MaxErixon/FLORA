<?php
//For login with username and password
require_once "functions.php";

//Displays errors
ini_set("display_errors", 1);

// If request method is not POST send error message 
if($request_method !== "POST"){
    $error = ["error" => "Only POST method is allowed"]; 
    sendJSON($error, 400);
}

//The r_data must include username and password 
if(isset($requestData["username"], $requestData["password"])){
    if(empty($requestData["username"]) or empty($requestData["password"])){
        $error = ["error" => "Please fill in all of the information."];
        sendJSON($error, 404);
    }
    //if the requestData is correct, loop through the database of 
    //users and check that the user exists
    foreach($users as $user){
        if($user["username"] == $requestData["username"] and $user["password"] == $requestData["password"]){
            //Allwo the user to login if it's in the database.
            sendJSON($user);

        }
    }
    $error = ["error" => "No user found."];
    sendJSON($error, 400);
}



?>
?> 



