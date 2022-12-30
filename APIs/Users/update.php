<?php
ini_set("display errors", 1);


require_once "functions.php";


$fileName= "users.json";


$requestMethod = $_SERVER["REQUEST_METHOD"];

$requestJSON = file_get_contents("php://input");
$requestData = json_decode($requestJSON, true);


        if (file_exists($fileName)) {
                 $requestFile = file_get_contents($fileName);
                 $usersArray = json_decode($requestJSON, true);
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
        
        $currentUser = json_decode($currentUserJSON, true);
        // Update the password
        foreach ($currentUser as $index => $user){
            if ($user["id"] == $requestData["id"]){
                array_splice($currentUser, $index, 1);
                $users = ["id" => $requestData["id"], "username" => $requestData["password"], "newPassword" => $requestData["newPassword"]];
                $currentUserJSON[] = $users;
                array_multisort($currentUser);
                file_put_contents($filename, json_encode($currentUser, JSON_PRETTY_PRINT));
                echo json_encode($users);
            }
        }          

    }















































