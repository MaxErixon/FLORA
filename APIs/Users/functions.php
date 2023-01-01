<?php
if($_SERVER["REQUEST_METHOD"] == "OPTIONS"){
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    
    exit();
}else{
    header("Access-Control-Allow-Origin: *");
};
function sendJSON($data, $statusCode = 200){
    header("Content-Type: application/json");
    http_response_code($statusCode);
    $json = json_encode($data);
    echo $json;
    exit();
}

?>