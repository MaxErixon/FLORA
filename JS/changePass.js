"use-strict";

let sessionUser;

function ChangeInfo(){
  console.log("hej");
    sessionUser = localStorage.getItem("sessionUser");
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;


    const user = {
      username: username, 
      password: password,
    };

    const request = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {"Content-type": "application/json"},
    };

    const statusRqst = new Request("../APIs/Users/update.php", request);
    console.log(statusRqst);

    let statusResponse;
    fetch(statusRqst)
    .then((r) => {
      statusResponse = r;
      return r.json();
    })
    .then((resource) => {
      UpdatePassword(statusResponse, resource.username);
  
    });
}

function UpdatePassword(statusResponse, username){ 

  if(statusResponse.status === 200){
    localStorage.setItem("sessionUser", username);
    alert("Password changed sucessfully");
    
  } else{
   location.href = "userSettings.html";
   alert("New password and confirm password must match!");
   console.log($user);
  
}
}
