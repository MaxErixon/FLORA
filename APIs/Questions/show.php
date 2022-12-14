<?php
ini_set("display errors", 1);

require_once "functions.php";

$fileName= "questions.json";

$method = $_SERVER["REQUEST_METHOD"];

if ($method != "GET") {
    $error = ["error"=>"Invalid method"];
    sendJSON($error,405);
}

$user_questions=[];

if (file_exists($fileName)) {
    $json = file_get_contents($fileName);
    $user_questions = json_decode($json, true);
    
}

sendJSON($user_questions);