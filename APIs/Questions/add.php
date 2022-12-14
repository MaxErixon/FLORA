<?php
ini_set("display errors", 1);


require_once "functions.php";


$fileName= "questions.json";


$method = $_SERVER["REQUEST_METHOD"];


if ($method != "POST") {
        $error = ["error"=>"Invalid method"];
        sendJSON($error, 405);
}


$questions = [];


if (file_exists($fileName)) {
            $json = file_get_contents($fileName);
            $questions = json_decode($json, true);
            
 }


$contentType = $_SERVER["CONTENT_TYPE"];


if ($contentType != "application/json") {
    $error = ["error"=>"Invalid content type"];
        sendJSON($error, 400);
}


$requestJSON = file_get_contents("php://input");
$requestData = json_decode($requestJSON, true);




if ($method == "POST") {

$category = $requestData["category"];
$question = $requestData["question"];
$correctAnswer = $requestData["correctAnswer"];
$incorrectAnswer1 = $requestData["incorrectAnswer1"];
$incorrectAnswer2 = $requestData["incorrectAnswer2"];
$incorrectAnswer3 = $requestData["incorrectAnswer3"];

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

    if ($correctAnswer == "" or $question == "" or $incorrectAnswer1 == "" or $incorrectAnswer2 == "" or $incorrectAnswer3 == "") {
        $error = ["error"=>"Missing text"];
        sendJSON($error, 404);
    }

    $highestId = 0;

    foreach ($questions as $q) {
        if ($q["id"] > $highestId) {
            $highestId = $q["id"];
        }
    }

    $nextId = $highestId + 1;
    $newQuestion = ["id" => $nextId, "category" => $category, "question" => $question, "correctAnswer" => $correctAnswer, "incorrectAnswer1" => $incorrectAnswer1, "incorrectAnswer2" => $incorrectAnswer2, "incorrectAnswer3" => $incorrectAnswer3];
    $questions[] = $newQuestion;
    $json = json_encode($questions, JSON_PRETTY_PRINT);
    file_put_contents($fileName,$json);
    sendJSON($newQuestion);

}