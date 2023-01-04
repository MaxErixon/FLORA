// controlls the user info that will be filled in these input fields that tries to login exists in the users.json
function checkUsers() {
  const password = document.querySelector("#logInpassword").value;
  const username = document.querySelector("#logInusername").value;

  // mekes a post request that contains the password and username
  let body_post = {
    password: password,
    username: username,
  };
  // sends a request to the login.php file
  let rqt_post = new Request("../APIs/Users/login.php", {
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
        localStorage.setItem("setName", `${resource.username}`);
        cat = localStorage.getItem("setName");
        console.log(cat);
      }
      console.log(responseStatus);
    });
}
document.querySelector("#loginBtn").addEventListener("click", checkUsers);
