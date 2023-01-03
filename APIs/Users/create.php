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
    // If username or password are missing in the request it returns an error
    if (!isset($requestData["username"],$requestData["password"])) {
        $error = ["error"=>"Bad request"];
        sendJSON($error, 400);
    }
    // if the variabels are empty return an error message
    if ($requestData["username"] == "" or $requestData["password"] == "") {
        $error = ["error"=>"Bad request"];
        sendJSON($error, 404);
    }
    // username is the same as the one we got the request about
    $username = $requestData["username"];
    $password = $requestData["password"];

    $highestId = 0;

    // loops through our users and finds the one with the highest id 
    foreach ($users as $user) {
        if ($user["id"] > $highestId) {
            $highestId = $user["id"];
        }
    }
    // Then we set the next id to be even higher than the highest id 
    $nextId = $highestId + 1;
    // creates variables for the new info 
    $newUser = ["id" => $nextId, "username" => $username, "password" => $password];
    // Puts the new user in an empty array
    $users[]= $newUser;
    // codes from PHP to JSON and prints it pretty
    $json = json_encode($users, JSON_PRETTY_PRINT);
    // gets the content from the file
    file_put_contents($fileName,$json);
    // sends the new user
    sendJSON($newUser);
}
?>















































