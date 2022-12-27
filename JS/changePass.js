"use-strict";
// Kolla vem som är inloggad
function getUserInfo() {
  const user = user.find(function )
  if(user === loggedin){
    console.log(true);
   

  }
}

function ChangePassword(){
    var confirmPassword = document.querySelector('input[name="confirmPassword"]');
    var confirmUsername = document.querySelector('input[name="confirmUsername"]');
    
    localStorage.setItem(confirmUsername, confirmPassword, document.getElementsByClassName("passWform").value);
    alert('Password has been changed!');

document.querySelector("#changepassword").addEventListener("click"), function(event){
  event.preventDefault();
  let confirmUsername = document.getElementById("confirmUsername").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  fetch("../APIs/users/update.php", {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      id: id, username: confirmUsername, password:confirmPassword
    }).then((respo) => respo.json())
    .then((resource) => {
        if (username.value == confirmUsername || password.value == confirmPassword ) {
          missingText();
        }
        else{
            console.log(resource);
            password.value = "";
            username.value = "";
            UpdatePassword();
        }
});
  })
}}

function UpdatePassword(){

}

function loginBtnClick(){
    if(document.getElementById('login').value == localStorage.getItem('password')){
      alert('Correct Login');
    }else{
      alert('Wrong Password');
    }
  }