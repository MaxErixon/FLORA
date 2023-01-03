<?php
//For login with username and password
ini_set("display errors", 1);


require_once "functions.php";


$fileName= "users.json";


$method = $_SERVER["REQUEST_METHOD"];


if ($method != "POST") {
        $error = ["error"=>"Invalid method"];
        sendJSON($error, 405);
}

$users = [];

if (file_exists($fileName)) {
            $json = file_get_contents($fileName);
            $users = json_decode($json, true);
            
}


$contentType = $_SERVER["CONTENT_TYPE"];

if ($contentType != "application/json") {
    $error = ["error"=>"Invalid content type"];
        sendJSON($error, 400);
}

$requestJSON = file_get_contents("php://input");
$requestData = json_decode($requestJSON, true);

if(isset($requestData["username"], $requestData["password"])){
    if( empty($requestData["username"]) or empty($requestData["password"])){
        $error = ["error"=>"missing"];
        sendJSON($error, 405);
    }

    foreach($users as $user){
        if($user["username"] == $requestData["username"] and $user["password"] == $requestData["password"]){
            sendJSON($user);
        }
    }
    $error = ["error"=>"User not found"];
        sendJSON($error, 405);
}



?>



