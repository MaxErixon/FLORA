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
    if (!isset($requestData["username"])) {
        $error = ["error"=>"Bad Request"];
        sendJSON($error, 400);
    } 

    $username = $requestData["username"];

    // loops through the userss as the index user
    foreach ($users as $index => $user) {
        // kontrolls if the username is the same as the one that clicked
        if ($user["username"] == $username) {
            // uses the array splice method to delete one of the current user 
            array_splice($users, $index, 1);
            // PHP to JSON and prints the user
            $json = json_encode($users, JSON_PRETTY_PRINT);
            // gets the contents thats inside the file
            file_put_contents($fileName,$json);
            // sends the user 
            sendJSON($user);
        }
        
    }
    
    $error = ["error"=>"NOT FOUND"];
    sendJSON($error, 404);

}