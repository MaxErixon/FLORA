<?php
ini_set("display errors", 1);

require_once "functions.php";

$fileName= "users.json";


$method = $_SERVER["REQUEST_METHOD"];

if ($method != "DELETE") {
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

if ($method == "DELETE") {
    if (!isset($requestData["id"])) {
        $error = ["error"=>"Bad Request"];
        sendJSON($error, 400);
    } 

    $id = $requestData["id"];

    foreach ($users as $index => $user) {
        if ($user["id"] == $id) {
            array_splice($users, $index, 1);
            $json = json_encode($users, JSON_PRETTY_PRINT);
            file_put_contents($fileName,$json);
            sendJSON($user);
        }
        
    }
    
    $error = ["error"=>"NOT FOUND"];
    sendJSON($error, 404);

}