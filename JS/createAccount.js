"use-strict";

function accountCreated() {
    let answer = confirm(
      "Your account has been created!"
    );
    if (answer === true) {
      location.href = "login.html";
    }
  }
  
function missingText() {
  alert("Please choose a username and password!");
}

function createUser() {
  var password = document.querySelector('input[name="password"]');
  var username = document.querySelector('input[name="username"]');
  
  let body_post = {
    username: username.value,
    password: password.value,
  };
  // variable rqt_post contains the request 
  let rqt_post = new Request("/dbp/dbp22/projekt/flora/APIs/users/create.php", {
    method: "POST",
    body: JSON.stringify(body_post),
    headers: { "Content-type": "application/json" },
    });
    // fetches the variable that contains the request 
    fetch(rqt_post)
    // server creates a responce when the request recieves the request that will be sent to the client
    .then((respo) => respo.json())
     // Then the responce comes back to us with a promice about the resource.
      // when the promice is fulfilled the function will be called with respo as a parameter 
    .then((resource) => {
      // checks if value is empty and if it is then the missingText will be called
      if (username.value == "" || password.value =="" ) {
        missingText();
      }else{
        console.log(resource);
        password.value = "";
        username.value = "";
        accountCreated();
      }
    });
}
document.querySelector(".submitBtn").addEventListener("click",createUser);
