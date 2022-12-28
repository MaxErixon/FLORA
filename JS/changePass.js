"use-strict";
// Hämta databasen


function ChangePassword(){
    var newPassword = document.querySelector('input[name="newPassword"]');
    var confirmPassword = document.querySelector('input[name="confirmPassword"]');

    var newUsername = document.querySelector('input[name="newUsername"]');
    var confirmUsername = document.querySelector('input[name="confirmUsername"]');
    
   

   if(newPassword === confirmPassword){

   }

   if(newUsername === confirmUsername){

  }



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
})
  })
}

function UpdatePassword(){

}

/*
function loginBtnClick(){
    if(document.getElementById('login').value == localStorage.getItem('password')){
      alert('Correct Login');
    }else{
      alert('Wrong Password');
    }
  }
  */