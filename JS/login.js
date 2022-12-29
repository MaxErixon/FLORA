"use strict"
function logInUser(){
    const username = document.querySelector("#logInusername").value;
    const password = document.querySelector("#logInpassword").value;
    
  const userObject = {
        username: username,
        password: password
   };

    const login_request = new Request("../APIs/Users/login.php", {
      method: 'POST',
      body: JSON.stringify(userObject),
      headers: { "Content-type": "application/json" }
  });

  //fetch the request , when the resource promise comes call the function logIn_answer
  fetch(login_request)
    .then((resp) => {
      responseStatus = resp;
        return resp.json();
      })
      .then((resource) => {
        console.log(resource);
        logIn_answer(responseStatus, resource.username);
      });

}

function logIn_answer(responseStatus, username) {
  if (responseStatus.status === 200) {
    localStorage.setItem("globalUser", username);
    //Run the funciton for the Log in view
    // showFavorites(username);
    window.location.href = "home-account.html";
  } else if (responseStatus.status === 400) {
   console.log("not found");
    //Update the global variabel to 0 to show that user is not logged in
    globalUser = 0;
  } else if (responseStatus.status === 404) {
    console.log("not found");
  }

}
//Checks the pathlocation and const if the path is login
//The eventlistner for the loginButton and runs the login-funcion with the parameter globalUser
if (window.location.pathname.endsWith("login.html")) {
  const logInBtn = document.getElementById("buttonlogin");
  logInBtn.addEventListener("click", () => {
    location.href = "home-account.html";
  });
}
