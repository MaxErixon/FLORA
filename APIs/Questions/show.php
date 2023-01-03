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



if (isset($_GET["category"]) ) {
    
    $category = $_GET["category"];
    $array=[];

    foreach ($user_questions as $q) {
        if ($q["category"] == $category) {
            $array[]=$q;
        }
    }
    
    sendJSON($array);

    $error = ["error"=>"User does not exist"];
    sendJSON($error);
} 




if (isset($_GET["limit"])) {
    
    $limit = $_GET["limit"];

    shuffle($user_questions);
    $array=[];

    for ($i=0; $i <$limit ; $i++) { 
        $array[]=$user_questions[$i];
    }
    sendJSON($array);

    $error = ["error"=>"User does not exist"];
    sendJSON($error);
} 



sendJSON($user_questions);