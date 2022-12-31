


function checkUsers() {
  const password = document.querySelector("#logInpassword").value;
  const username = document.querySelector("#logInusername").value;

  let body_post = {
    password: password,
    username: username,
  };

  let rqt_post = new Request("/APIs/users/login.php", {
    method: "POST",
    body: JSON.stringify(body_post),
    headers: { "Content-type": "application/json" },
  });

  let responseStatus;

  fetch(rqt_post)
    .then((response) => {
      let responseStatus = response;
      if (responseStatus.status != 200) {
        console.log("error");
      }

      return responseStatus.json();
    })
    .then((resource) => {
      if (resource.error) {
        alert("Wrong username or password!");
      } else {
        // logIn_answer(responseStatus, resource.username);
        alert(`Welcome ${resource.username}!`);
        location.href = "home-account.html";
        localStorage.setItem("setName", `${resource.username}`)
        cat = localStorage.getItem("setName");
        console.log(cat);

        
      }
      console.log(responseStatus);
      
    });
}

document.querySelector("#loginBtn").addEventListener("click", checkUsers)







