"use strict";


function ChangeInfo(){
    const username = localStorage.getItem("username");
    const password = document.getElementById("password").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;


    // request body contains this keys
    const passwordform = {
      username: username,
      password: password,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };

    const user = {
      method: "PATCH",
      body: JSON.stringify(passwordform),
      headers: {"Content-type": "application/json"},
    };

    const Statusrequest = new Request("/APIs/Users/update.php", user);
    console.log(Statusrequest);

    let prms= fetch(Statusrequest)  // Skickar i väg förfrågan
    .then(r => r.text())
    // promise skapas & placeras i en variabel. När promise blir fulfilled kommer functionen anropas
    prms.then(UpdatePassword); 
      console.log("hej");
      console.log(prms); 
    }

function UpdatePassword(){ 
  if(prms.status === 200){
    localStorage.setItem("username", "newPassword");
    console.log("Klar");
    console.log(prms);
    alert("Password changed sucessfully");
  } else{
   location.href = "userSettings.html";
   alert("New password and confirm password must match!");
}
}
