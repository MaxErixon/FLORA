"use strict"
let sessionUser;

function logInUser(){
    const password = document.querySelector("logInpassword").value;
    const username = document.querySelector("logInusername").value;
    
  const user = {
        username: username,
        password: password,
   };

    // method, body and headers in the request
    const options = {
          method: "POST",
          body: JSON.stringify(user),
          headers: { "Content-type": "application/json" },
    };

  //request to log in PHP-file
  const user_status_request = new Request("..APIs/users/login.php", options);

  let responseStatus;
  //fetch the request , when the resource promise comes call the function logIn_answer
  fetch(user_status_request)
    .then((r) => {
      responseStatus = r;
      return r.json();
    })
    .then((resource) => {
      logIn_answer(responseStatus, resource.username);
    });
}

//Function for the response to the request to log in
function logIn_answer(responseStatus, username) {
  //If the user is in the database and the log in is sucessful show the log in view.
  if (responseStatus.status === 200) {
    //Update the global variabel to the username
    localStorage.setItem("sessionUser", username);
  

    //Update the global variabel to 0 to show that user is not logged in
    sessionUser = 0;
  } else if (responseStatus.status === 404) {
    alert("missingInfo");
  }
}
//Checks the pathlocation and const if the path is login
//The eventlistner for the loginButton and runs the login-funcion with the parameter globalUser
if (window.location.pathname.endsWith("login.html")) {
  const logInBtn = document.getElementById("buttonlogin");
  logInBtn.addEventListener("click", () => {
    logInUser(sessionUser);
  });
}
