<?php
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


if ($method == "POST") {
    if (!isset($requestData["username"],$requestData["password"])) {
        $error = ["error"=>"Bad request"];
        sendJSON($error, 400);
    }

    if ($requestData["username"] == "" and $requestData["password"] == "") {
        $error = ["error"=>"Bad request"];
        sendJSON($error, 404);
    }
    
    $username = $requestData["username"];
    $password = $requestData["password"];

    $highestId = 0;

    foreach ($users as $user) {
        if ($user["id"] > $highestId) {
            $highestId = $user["id"];
        }
    }

    $nextId = $highestId + 1;
    $newUser = ["id" => $nextId, "username" => $username, "password" => $password];
    $users[]= $newUser;
    $json = json_encode($users, JSON_PRETTY_PRINT);
    file_put_contents($fileName,$json);
    sendJSON($newUser);
}















































