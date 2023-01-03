"use strict";
// Gets the value from the inputfields in HTML
function ChangeInfo() {
  const password = document.getElementById("password").value;
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const username = `${localStorage.getItem("setName")}`;

// request body contains this keys
  let pwForm = {
    username: username,
    password: password,
    newPassword: newPassword,
    confirmPassword: confirmPassword
  };
  // variable rqt_post contains the request 
  let rqt_post = new Request("/APIs/Users/update.php", {
    method: "PATCH",
    body: JSON.stringify(pwForm),
    headers: { "Content-type": "application/json" }
  });
   // fetches the variable that contains the request 
  fetch(rqt_post)
     // server creates a responce when the request recieves the request that will be sent to the client
    .then((respo) => {
      // Then the responce comes back to us with a promice about the resource.
      // when the promice is fulfilled the function will be called with respo as a parameter 
      UpdatePassword(respo); 
      return respo.json()
    })
    .then(result => {
      console.log(result)
    })

  function UpdatePassword(responseStatus) {
    if (responseStatus.status === 200) {
      alert("Password changed sucessfully");
    } 
    if (responseStatus.status === 406) {
      alert("New password and confirm password must match!");
     
    }
  }
}
