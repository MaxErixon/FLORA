"use-strict";

// när man klickar på btn signUp ska hela loginform få display hidden
("#SignUp").onclick(function changeInfo () {
    let hidden= document.getElementById("loginform");
    hidden.style.display = "none";
});

function changeInfo (){
    let createAccountInfo = createElement("div");
    createAccountInfo.innerHTML = `
            <img src="../Images/user.jpg" alt="user">
            <h1>Become a member</h1>
            `
 document.body.appendChild(createAccountInfo);
 

}

// byta ut input fälten och text 




