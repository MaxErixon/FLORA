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

if (isset($_GET["category"])) {
    
    $category = $_GET["category"];

    foreach ($user_questions as $q) {
        if ($q["category"] == $category) {
            $user_questionsCategory[]=$q;
        }
    }
    sendJSON($user_questionsCategory);
    $error = ["error"=>"User does not exist"];
    sendJSON($error);
} 




if (isset($_GET["limit"])) {
    
    $limit = $_GET["limit"];

$arr=[];

for ($i=0; $i < $limit ; $i++) { 
    foreach ($arr as $que) {
        if ($que["id"] == 3) {
            sendJSON($que);
        }
    }

        $max = count($user_questions);
        $user_questionsLimit = $user_questions[rand(0,$max-1)];
        $arr[]=$user_questionsLimit;
        
    }
    

    sendJSON($arr);

    $error = ["error"=>"User does not exist"];
    sendJSON($error);
} 



sendJSON($user_questions);