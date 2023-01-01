<?php
ini_set("display errors", 1);

require_once "functions.php";

$fileName= "users.json";


$method = $_SERVER["REQUEST_METHOD"];

if ($method != "PATCH") {
    $error = ["error"=>"Invalid method"];
    sendJSON($error, 405);
}

var_dump($_SERVER);

$users = [];


if (file_exists($fileName)) {
    $json = file_get_contents($fileName);
    sendJSON($json);
    $users = json_decode($json, true);
    
}

$contentType = $_SERVER["CONTENT_TYPE"];

if ($contentType != "application/json") {

    $error = ["error"=>"Invalid content type"];
        sendJSON($error, 400);
}

$requestJSON = file_get_contents("php://input");
$requestData = json_decode($requestJSON, true);



if ($method == "PATCH") {

    if (!isset($requestData["username"], $requestData["password"], $requestData["newPassword"], $requestData["confirmPassword"])) {
        $error = ["error"=>"The new password and confirm password must match!"];
        sendJSON($error, 400);
    }
    
    if ($requestData["password"] == ""||  $requestData["newPassword"] == "" || $requestData["confirmPassword"] == "") {
        $error = ["error"=>"Please fill in all inputfields!"];
        sendJSON($error, 400);
    }
    $username = $requestData["username"];
    $password = $requestData["password"];
    $newPassword =$requestData["newPassword"];
    $confirmPassword = $requestData["confirmPassword"];

        // Update users password
    foreach ($user as $users){    
        if ($user["username"] == $username) {
            
            $user["password"] = $newPassword;
            $users[$index] = $user;

            $json = json_encode($users, JSON_PRETTY_PRINT);
            file_put_contents($fileName, $json);
            sendJSON($user);
            }

        }          
   
    }













































