<?php
//For login with username and password
require_once "functions.php";

//Displays errors
ini_set("display_errors", 1);


$method = $_SERVER["REQUEST_METHOD"];
// If request method is not POST send error message 
if($method !== "POST"){
    $error = ["error" => "Only POST method is allowed"]; 
    sendJSON($error, 400);
} 

// Any page you want to perform session-checks on needs to start with:
    session_start();

    if($_SESSION["loggedIn"] !== true){
        echo 'not logged in';
        header("Location: login.php");
        exit;
    }
    
    $_SESSION["loggedIn"] = true;


function findUser($username, $password){
        if($requestData['username'] && $requestData['password'] !== "") {
            foreach($user as $users){
                $requestData['id'] = $id;
                $requestData['username'] = $username;
                $requestData['password'] = $password;
                sendJSON($user);
            }{
                $error = ["error" => "No user found."];
                sendJSON($error, 400);
            }
        }
}

function loginUser(){


}


?>



