<?php

ini_set("display errors", 1);

require_once "functions.php";

$fileName = "users.json";

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

if ($method == "PUT") {
    if (!isset($requestData["username"],$requestData["password"])) {
        $error = ["error"=>"Bad request"];
        sendJSON($error, 400);
    }
    if ($requestData["username"] == "" or $requestData["password"] == "") {
        $error = ["error"=>"Bad request"];
        sendJSON($error, 404);
    }
    
    $username = $requestData["username"];
    $password = $requestData["password"];
    $updateId = $requestData["id"];

   
        // Hitta användaren som är inloggad och ta bort den 
             foreach ($currentUser as $index => $user) {
                if ($user["id"] > $requestData["id"]) {
                    array_splice($currentUser, $index, 1);                  
                    $data = ["id" => $updateId, "username" => $confirmUsername, "password" => $confirmPassword];
                    $currentUser[]= $data;
                    array_multisort($currentUser); // Gör att användaren har kvar sin plats
                    file_put_contents($fileName,json_encode($currentUser, JSON_PRETTY_PRINT));
                    echo json_encode($data);
                }

            }
}
    


?> 