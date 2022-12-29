<?php
//For login with username and password
require_once "functions.php";

ini_set("display_errors", 1);

// If request method is not POST send error message 
if($method != "POST"){
    $error = ["error" => "Only POST method is allowed"]; 
    sendJSON($error, 400);
} 

if(isset($requestData["username"], $requestData["password"])){
    if(empty($requestData["username"]) or empty($requestData["password"])){
        $error = ["error" => "Please fill in all of the information."];
        sendJSON($error, 404);
}

forEach($user as $users) {
    if ($user["username"] == $requestData["username"] and $user["password"] == $requestData["password"]){
        sendJSON($user);
    }
}
$error = ["error" => "No user found!"];
    sendJSON($error, 400);
}
?>



