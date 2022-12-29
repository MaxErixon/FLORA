"use strict"

function setUp(){
    document.getElementsByClassName("Library-container").onclick = setSavedQuiz;

}

function logout() {
    let answer = confirm("Are you sure you want to logout?");
    if (answer === true) {
      location.href = "../HTML/index.html";
    }
  }

  document.querySelector("#logout").addEventListener("click", logout)

function setSavedQuiz(){

    let hidden = document.getElementById("forms");
    hidden.style.display = "hidden";

    let saveQuizBox = document.createElement("div");
    saveQuizBox.className = "SavedQuiz";
    document.body.style.backgroundColor = "grey";
     let text = "" 
    
}

function clickProfilePhoto () {
    document.getElementsByClassName("profilePhoto").onclick = setSettings;

}

function setSettings(){
    let hidden = document.getElementById("forms");
    hidden.style.display = "none";

    let textContent = document.createElement("div");
    textContent.innerHTML = "Choose a profile picture below:";

    let pictures = document.createElement("div");
       characters.innerHTML = `
       <img src=${profile[i].picture}>
       `
       characters.className = "profilePic";
       
       let profileContainer = document.createElement("profileContainer");
       let rows = document.createElementsByClassName("gridRow");
       let cells = document.createElementsByClassName("cell");
       
       // Creates a default grid sized 16x16
       function defaultGrid() {
           makeRows(16);
           makeColumns(16);
       }
       
       function makeRows(rowNum) {
       
           // Creates rows
           for (let i = 0; i < rowNum; i++) {
               let row = document.createElement("div");
               container.appendChild(row).className = "gridRow";
           };
       };
       
      
       function makeColumns(cellNum) {
           for (i = 0; i < rows.length; i++) {
               for (j = 0; j < cellNum; j++) {
                   let newCell = document.createElement("div");
                   rows[j].appendChild(newCell).className = "cell";
               };
       
           };
       };
       

}



