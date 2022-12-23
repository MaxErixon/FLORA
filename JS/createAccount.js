"use-strict";

// // när man klickar på btn signUp ska hela loginform få display hidden
// "#SignUp".onclick(function changeInfo() {
//   let hidden = document.getElementById("loginform");
//   hidden.style.display = "none";
// });

// function changeInfo() {
//   let createAccountInfo = createElement("div");
//   createAccountInfo.innerHTML = `
//             <img src="../Images/user.jpg" alt="user">
//             <h1>Become a member</h1>
//             `;
//   document.body.appendChild(createAccountInfo);
// }


function accountCreated() {
    let answer = confirm(
      "Your account has been created!"
    );
    if (answer === true) {
      console.log(answer);
      location.href = "home-account.html";
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
    
    let rqt_post = new Request("../APIs/users/create.php", {
        method: "POST",
        body: JSON.stringify(body_post),
        headers: { "Content-type": "application/json" },
    });
    fetch(rqt_post)
    .then((respo) => respo.json())
    .then((resource) => {
        if (username.value == "" || password.value =="" ) {
          missingText();
        }
        else{
            
            console.log(resource);
            password.value = "";
            username.value = "";
            accountCreated();
        }
    });
}



document.querySelector(".submitBtn").addEventListener("click",createUser);


// byta ut input fälten och text
