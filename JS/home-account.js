"use strict";
// When the user has logged in the username will appear with this message
document.querySelector(
  ".title h1"
).innerHTML = `Welcome to Quizmaster <span>${localStorage.getItem(
  "setName"
)}!<span>`;

// When the user clicks on buttons from index.html the onclick function activates them
function btnuserIcon() {
  location.href = "login.html";
  console.log("hello");
}

function btnfreeQuiz() {
  location.href = "free-quiz.html";
  console.log("hello");
}

function btnuserQuiz() {
  location.href = "user-questions.html";
}

function btnsubmitQuiz() {
  location.href = "SubmitQuestion.html";
}

function btnbackIcon() {
  location.href = "free-quiz.html";
  console.log("hello");
}

function btnPlayQuiz() {
  location.href = "login.html";
  console.log("hello");
}
