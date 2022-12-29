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



sendJSON($users);