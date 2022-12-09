<?php
ini_set("display errors", 1);

require_once "functions.php";

$fileName= "users.json";

$method = $_SERVER["REQUEST_METHOD"];

if ($method != "GET") {
    $error = ["error"=>"Invalid method"];
    sendJSON($error,405);
}

$users=[];

if (file_exists($fileName)) {
    $json = file_get_contents($fileName);
    $users = json_decode($json, true);
    
}

// if (isset($_GET["id"])) {
    
//     $id = $_GET["id"];

//     foreach ($users as $user) {
//         if ($user["id"] == $id) {
//             sendJSON($user);
//         }
//     }
//     $error = ["error"=>"User does not exist"];
//     sendJSON($error);
// } 



sendJSON($users);