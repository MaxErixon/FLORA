<?php
ini_set("display errors", 1);
require_once "functions.php";
$fileName= "users.json";

$requestMethod = $_SERVER["REQUEST_METHOD"];

if($_SERVER["REQUEST_METHOD"] === "PATCH"){
    $activeUser = file_get_contents($filename);
    $dataUser= json_decode($json, true);

    $requestJSON = file_get_contents("php://input");
    $requestData = json_encode($requestJSON, true);

}

if ($requestMethod == "PATCH") {

    if (!isset($requestData["password"], $requestData["newPassword"], $requestData["confirmPassword"])) {
        $error = ["error"=>"The new password and confirm password must match!"];
        sendJSON($error, 400);
    }
    
    if ($requestData["password"] == ""||  $requestData["newPassword"] == "" || $requestData["confirmPassword"] == "") {
        $error = ["error"=>"Please fill in all inputfields!"];
        sendJSON($error, 400);
    }
        $password = $requestData["password"];
        $newPassword =$requestData["newPassword"];
        $confirmPassword = $requestData["confirmPassword"];


     
        // Update users password
        foreach ($users as $index => $activeUser){
            if ($user["username"] == $requestData["username"]) {
                $users[$index]["userId"] = $user["userId"];
                $users[$index]["username"] = $user["username"];
                $users[$index]["newPassword"] = $newPassword;
                $users[$index]["confirmPassword"] = $confirmPassword;
                array_splice($activeUser, $index, 1);
                array_multisort($activeUser);
                file_put_contents($filename, json_encode($users, JSON_PRETTY_PRINT));
                sendJSON($users[$index]);
            }
        }          

    }















































