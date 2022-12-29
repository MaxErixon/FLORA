<?php session_start(); /* Starts the session */

unset($_SESSION['login']);
session_destroy();
$currentpage = $_SESSION['../home-free.html'];
header("location: $currentpage");
?>
