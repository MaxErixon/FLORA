"use-strict";
// Hämta databasen


function ChangePassword(){
    var newUsername = document.querySelector('input[name="newUsername"]');
    var confirmUsername = document.querySelector('input[name="confirmUsername"]');
    
    var newPassword = document.querySelector('input[name="newPassword"]');
    var confirmPassword = document.querySelector('input[name="confirmPassword"]');
   

    if (isset($_POST['changepass'])) {

      if (($_POST['oldpass']!=$pass) || ($_POST['newpass']!=$_POST['confirmpass']) ) {
          $error = "Insert valid password!";
      }
      else
      {
          $pass=$_POST["confirmpass"];
          $email = $_SESSION["email"];
      }
    }  

   if(newPassword === confirmPassword){


   }

  fetch("../APIs/users/update.php", {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      id: id, username: confirmUsername, password: confirmPassword
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