"use strict";

 function ChangeInfo(){
    const password = document.getElementById("password").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;


    // request body contains this keys
    const pwForm = {
      "password": password,
      "newPassword": newPassword,
      "confirmPassword": confirmPassword
    };


    const user = {
      method: "PATCH",
      body: JSON.stringify(pwForm),
      headers: {"Content-type": "application/json"}
    };
  
    console.log(user);
    const Statusrequest = new Request("/APIs/Users/update.php", user);
    console.log(Statusrequest);

    let responseStatus;
    fetch(Statusrequest)  // Skickar i väg förfrågan
    .then((r) => {
      responseStatus = r;
      return r.json();
    })
    // promise skapas & placeras i en variabel. När promise blir fulfilled kommer functionen anropas
    .then(() => {
        UpdatePassword(responseStatus);
    });
  }

function UpdatePassword(responseStatus){ 
  if(responseStatus.status === 200){
    alert("Password changed sucessfully");
  } else{
   location.href = "userSettings.html";
   alert("New password and confirm password must match!");
}
}

