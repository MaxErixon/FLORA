<?php
ini_set("display errors", 1);


require_once "functions.php";


$fileName= "users.json";


$method = $_SERVER["REQUEST_METHOD"];

session_start();
if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
    echo "Welcome to the member's area, " . htmlspecialchars($_SESSION['username']) . "!";
} else {
    echo "Please log in first to see this page.";
}

if ($method != "PATCH") {
    
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


if ($method == "PATCH") {

    if (!isset($requestData["username"],$requestData["password"],$requestData["id"])) {

        $error = ["error"=>"Bad request"];
        sendJSON($error, 400);
    }

    if ($requestData["username"] == "" or $requestData["password"] == "") {
        $error = ["error"=>"Bad request"];
        sendJSON($error, 404);
    }

    $id = $requestData["id"];
    $newUserName = $requestData["username"];
    $newPassword = $requestData["password"];

    foreach ($users as $index => $user) {
        if ($user["id"] == $id) {

            $user["username"] = $newUserName;
            $user["password"] = $newPassword;

            $users[$index] = $user;
            
            $json = json_encode($users, JSON_PRETTY_PRINT);
            file_put_contents($fileName,$json);
            sendJSON($user);
        }
    }
}















































