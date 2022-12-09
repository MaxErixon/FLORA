"use strict"

function setButtonsEventHandler(){
    let userIcon = document.getElementById("icon-user");
    userIcon.addEventListener("click", buttonFreeQuiz);
}

function buttonFreeQuiz(){
    console.log("hello");
}