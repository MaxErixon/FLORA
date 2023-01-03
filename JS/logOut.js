"use strict"

function logout() {
    let answer = confirm("Are you sure you want to logout?");
    if (answer === true) {
      location.href = "../HTML/index.html";
    }
  }
document.querySelector("#logout").addEventListener("click", logout)



