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
  fetch(rqt_post)
    .then((response) => {
      if (response.status != 200) {
        console.log("error");
      }

      return response.json();
    })
    .then((resource) => {
      if (resource.error) {
        alert("Wrong username or password!");
      } else {
        alert(`Welcome ${resource.username}`);
        location.href = "home-account.html";
      }
    });
}

document.querySelector("#loginBtn").addEventListener("click", checkUsers);
