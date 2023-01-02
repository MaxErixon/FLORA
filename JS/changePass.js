"use strict";



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
  console.log(pwForm);
  let rqt_post = new Request("/APIs/Users/update.php", {
    method: "PATCH",
    body: JSON.stringify(pwForm),
    headers: { "Content-type": "application/json" }
  });

  fetch(rqt_post)
    .then((respo) => {
      console.log(respo);
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
