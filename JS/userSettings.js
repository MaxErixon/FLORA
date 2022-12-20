"use strict"

function hiddenForms(){
    document.getElementById("forms").style.visibility ="hidden";
    console.log("library");
    document.getElementById("BtnWrapper").style.visibility ="hidden";
  


    let saveQuizBox = document.createElement("div");
    saveQuizBox.className = "SavedQuiz";
    document.body.style.backgroundColor = "grey";

}

function getQuizInfo (){
    for(let i = 0; i < savedQuiz.length; i++){
        let divId = document.getElementById("container"); 
        let categoryId = document.createElement("div");
        categoryId.className = "savedQuizBox";
        let categoryTitleId = document.createElement("div");
        categoryTitleId.innerHTML = category[i].title;
        
    
}
}





/* 
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



*/