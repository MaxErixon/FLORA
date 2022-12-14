"use strict"

function DeleteAccount() {
let answer = confirm("Are you sure you want to delete your account?");
if (answer === true) {
    console.log(answer);
    alert('Your account has been deleted!');
    location.href = "home-free.html";
}
}

/* function checker() {
    var inputfields = "";
    if(inputfields === ""){
     alert('Inputfields can not be left blank');
    }else {
      SavedEditings();
     }      
}
*/

function SavedEditings(){
    let userform = document.getElementsByClassName("userform");
    let passWform = document.getElementsByClassName("passWform");
    if (userform && passWform === "") {
        alert('Inputfields can not be left blank');
    } else(userform && passWform !== "");{
     confirm('Do you want to save your changes?');
    }
    if (userform && passWform === true){
     alert('Your changes have been saved!');
     location.href = "home-account.html"
} 
}




