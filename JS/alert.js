"use strict"

function DeleteAccount() {
var answer = confirm("Are you sure you want to delete your account?");
if (answer === true) {
    console.log(answer);
    alert('Your account has been deleted!');
    location.href = "home-free.html";
}
}

function SavedEditings() {
    location.href = "home-account.html"
    confirm("Your editings have been saved!");
   
}