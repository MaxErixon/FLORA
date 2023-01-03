"use strict";

// pop ups for different events 

function needAccountSubmit() {
  let answer = confirm("You need an account to play user quizzes!");
  if (answer === true) {
    creteElement("button").addEventListener("click");
    location.href = "login.html";
    location.href = "createAccount.js";
  }
}

function needAccountUser() {
  let answer = confirm("You need an account to play user quizzes!");
  if (answer === true) {
    creteElement("button").addEventListener("click");
    location.href = "login.html";
    location.href = "createAccount.js";
  }
}

function cantSubmit() {
  alert("There must be a minimum of 5 questions to submit this quiz!");
}

function deleteUser() {
  let body_delete = {
    username: localStorage.getItem("setName"),
  };
  // sends request to our delete 
  let rqt_delete = new Request("/APIs/Users/delete.php", {
    method: "DELETE",
    body: JSON.stringify(body_delete),
    headers: { "Content-type": "application/json" },
  });

  fetch(rqt_delete)
    .then((response) => {
      response.json();
    })
    .then((resource) => {
      if (resource.error) {
      } else {
        console.log("nice");
      }
    });
}

function DeleteAccount() {
  let answer = confirm(
    "Are you sure you want to delete your account?\nYour data will be permanently deleted."
  );
  if (answer === true) {
    deleteUser();
    alert("Your account has been deleted!");
    location.href = "index.html";
  }
}

function contactUs() {
  alert(
    "Contact us\nMaxerixon112@gmail.com\nLovisa.ericsson01@gmail.com\nMelissa.sjostedt@outlook.com"
  );
}

function DeleteQuestion() {
  let answer = confirm("Are you sure you want to delete this quuestion?");
  if (answer === true) {
    alert("The question is now deleted");
  }
}

function submitQuestion() {
  alert("YEY!\nYour quiz is now in the user quiz!");
}


