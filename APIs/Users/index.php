<?php


// if a user has been logged out and then comes back they must log in again 
session_start();
if($_SESSION['email']){
    echo "Welcome user ". $_SESSION['username'];
} else {
    header("location: login.php");
}
?>
<a href="logOut.php">LogOut</a>