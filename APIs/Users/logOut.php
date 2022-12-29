<?php 

// starts the session
session_start();
// empty the variable
unset($_SESSION['username']);
// logs out, leads back to the login.php 
header("location: login.php");
var_dump("logged out!");
?>
