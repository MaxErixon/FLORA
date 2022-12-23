"use-strict";
// Kolla vem som är inloggad


function checkUser(){

    
}

function ChangePassword(){
    var password = document.querySelector('input[name="password"]');
    var username = document.querySelector('input[name="username"]');
    
    localStorage.setItem('input', document.getElementsByClassName("passWform").value);
    console.log(value);
    alert('Password has been changed!');

let body_post = {
    username: username.value,
    password: password.value,
};
  
let rqt_post = new Request("../APIs/users/update.php", {
      method: "PATCH",
      body: JSON.stringify(body_post),
      headers: { "Content-type": "application/json" },
});
fetch(rqt_post)
    .then((respo) => respo.json())
    .then((resource) => {
        if (username.value == newUsername || password.value == newPassword ) {
          missingText();
        }
        else{
            console.log(resource);
            password.value = "";
            username.value = "";
            UpdatePassword();
        }
    });
}


function UpdatePassword(){

}

function loginBtnClick(){
    if(document.getElementById('login').value == localStorage.getItem('password')){
      alert('Correct Login');
    }else{
      alert('Wrong Password');
    }
  }