<?php

$userDatabase = "../APIs/Users.users.json";


$methods = $_SERVER["REQUEST_METHOD"];
$json = file_get_contents("php://input");
$requestData = json_decode($r_json, true);

$users = [];

if($request_method != "GET"){
    $content_type = $_SERVER['CONTENT_TYPE'];

    if($content_type != "application/json"){
        $error = ["error" => "The content-type must be JSON."]; 
        sendJSON($error, 400);
    }
}

if(file_exists($userDatabase)){
    $users_json = file_get_contents($userDatabase);
    $users = json_decode($users_json, true);
}

if($_SERVER["REQUEST_METHOD"] == "OPTIONS"){
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    
    exit();
}else{
    header("Access-Control-Allow-Origin: *");
};
function sendJSON($data, $statusCode = 200){
    header('Content-Type: application/json');
    http_response_code($statusCode);
    echo json_encode($data);
    exit();
}