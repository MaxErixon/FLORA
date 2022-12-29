"use-strict";



function ChangePassword(){
    var newUsername = document.querySelector('input[name="newUsername"]');
    var confirmUsername = document.querySelector('input[name="confirmUsername"]');
    
    var newPassword = document.querySelector('input[name="newPassword"]');
    var confirmPassword = document.querySelector('input[name="confirmPassword"]');
    

   if(newPassword !== confirmPassword){
    alert("New password and confirm password must match!");
    location.href ="userSettings.html";
  } else{
   alert("Password changed sucessfully");
   location.href = "userSettings.html";
}
}

 /* fetch("../APIs/users/update.php", {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      id: id, username: confirmUsername, password: confirmPassword
    }).then((respo) => respo.json())
    .then((resource) => {

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

*/