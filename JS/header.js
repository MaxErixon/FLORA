document.querySelector("header").innerHTML = 
`<div class="header">
      
      <a href="home-account.html"><img src="../Images/Quiz-logo.png" class = "logo"></a>
      <h2>${localStorage.getItem("setName")}</h2>

      <h3 class="user-text"><a href="user-questions.html">User Quiz</a></h3>
      <h3 class="submit">
        <a href="SubmitQuestion.html">Submit a question</a>
      </h3>
      <h3 class="edit">
        <a href="userSettings.html">Edit account settings</a>
      </h3>
      <button id="icon-user">
        <img src="../Images/user.jpg" alt="buttonpng" />
      </button>
    </div>`

   