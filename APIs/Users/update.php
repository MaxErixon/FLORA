<?php
ini_set("display errors", 1);


require_once "functions.php";


$fileName= "users.json";


$method = $_SERVER["REQUEST_METHOD"];

if ($method != "PUT") {
        $error = ["error"=>"Invalid method"];
        sendJSON($error, 405);
    }

$users = [];
$requestJSON = file_get_contents("php://input");

if (file_exists($fileName)) {
            $requestFile = file_get_contents($fileName);
            $usersArray = json_decode($requestJSON, true);
}
$contentType = $_SERVER["CONTENT_TYPE"];

if ($contentType != "application/json") {
    $error = ["error"=>"Invalid content type"];
        sendJSON($error, 400);
}



if ($method == "PUT") {

    if (!isset($requestData["username"],$requestData["password"],$requestData["id"])) {
        $error = ["error"=>"Bad request"];
        sendJSON($error, 400);
    }
    
    if ($requestData["username"] == "" or $requestData["password"] == "") {
        $error = ["error"=>"Bad request"];
        console.log(password);
        sendJSON($error, 404);
    }
}    


if ($method !== "PUT") {
    sendJSON($users, 405);
}
    $id = $requestData["id"];
    $newUserName = $requestData["username"];
    $newPassword = $requestData["password"];

    foreach ($users as $index => $user) {
        if ($user["id"] == $requestData["id"]) {
            $user["username"] = $newUserName;
            $user["password"] = $newPassword;
      
            $users[$index] = $user;
            
            $json = json_encode($users, JSON_PRETTY_PRINT);
            file_put_contents($fileName,$json);
            sendJSON($requestData);
            console.log($requestData);
        }else{
            sendJSON($users, 400);
        }
}

















































