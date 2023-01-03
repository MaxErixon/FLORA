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
// isset checks if category and limit variable is set, which means that it has to be declared and is not NULL
if (isset($_GET["category"]) and isset($_GET["limit"]) ) {
    
    $category = $_GET["category"];
    $limit = $_GET["limit"];
    // array with questions 
    $array=[];
    // loops through users own question 
    foreach ($user_questions as $q) {
        if ($q["category"] == $category) {
            $array[]=$q;
        }
    }
    // shuffle our array
    shuffle($array);

    for ($i=0; $i <$limit ; $i++) { 
        $array2[]=$array[$i];
    }
    
    sendJSON($array2);

    $error = ["error"=>"User does not exist"];
    sendJSON($error);
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