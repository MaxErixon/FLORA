<?php
// display errors
ini_set("display errors", 1);

// includes functions from file "functions.php"
require_once "functions.php";

// variable contains our info in the json file
$fileName = "questions.json";

//  the method that the server contains 
$method = $_SERVER["REQUEST_METHOD"];

// if server method isn't POST we will get an error
if ($method != "POST") {
        $error = ["error"=>"Invalid method"];
        sendJSON($error, 405);
}
// declares variable questions
$questions = [];

if (file_exists($fileName)) {
            // opens the file questions.json and reads the info
            $json = file_get_contents($fileName);
            // makes the questions array to PHP from json 
            $questions = json_decode($json, true);
            
}
// checking if we got json 
$contentType = $_SERVER["CONTENT_TYPE"];

// if not an error will display
if ($contentType != "application/json") {
    $error = ["error"=>"Invalid content type"];
        sendJSON($error, 400);
}

// all data that we recieve is in php and saves in php://input 
$requestJSON = file_get_contents("php://input");
// JSON to PHP
$requestData = json_decode($requestJSON, true);



// posts info from open API 
if ($method == "POST") {

$category = $requestData["category"];
$question = $requestData["question"];
$correctAnswer = $requestData["correctAnswer"];
$incorrectAnswer1 = $requestData["incorrectAnswer1"];
$incorrectAnswer2 = $requestData["incorrectAnswer2"];
$incorrectAnswer3 = $requestData["incorrectAnswer3"];
    // if something is missing we will get an error message 
    if (!isset(
    $category,
    $question,
    $correctAnswer,
    $incorrectAnswer1,
    $incorrectAnswer2,
    $incorrectAnswer3
    )) {
    $error = ["error"=>"Bad request!"];
        sendJSON($error, 400);
    }
    
    if ($correctAnswer == "" or $question == "" or $incorrectAnswer1 == "" or $incorrectAnswer2 == "" or $incorrectAnswer3 == "" or $category == "") {
        $error = ["error"=>"Missing text or category"];
        sendJSON($error, 404);
    }
    
    $highestId = 0;
    // loops through questions and adds a new that will be given the highest id
    foreach ($questions as $q) {
        if ($q["id"] > $highestId) {
            $highestId = $q["id"];
        }
    }
    // adds the new question to our array 
    $nextId = $highestId + 1;
    $newQuestion = ["id" => $nextId, "category" => $category, "question" => $question, "correctAnswer" => $correctAnswer, "incorrectAnswer1" => $incorrectAnswer1, "incorrectAnswer2" => $incorrectAnswer2, "incorrectAnswer3" => $incorrectAnswer3];
    $questions[] = $newQuestion;
    $json = json_encode($questions, JSON_PRETTY_PRINT);
    file_put_contents($fileName,$json);
    sendJSON($newQuestion);

}