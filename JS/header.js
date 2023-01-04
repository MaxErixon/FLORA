// The links in the header
// we use localStorage to set the logged in users name in the header
document.querySelector("header").innerHTML = `<div class="header">
      
      <a href="home-account.html"><img src="../Images/Quiz-logo.png" class = "logo"></a>
      
      <h3 class="user-text"><a href="free-quiz.html">Cateogry quizzes</a></h3>
      <h3 class="submit">
      <a href="user-questions.html">User questions</a>
      </h3>
      <h3 class="edit">
      <a href="SubmitQuestion.html">Submit a question</a>
      </h3>
      <a href = "userSettings.html" id="icon-user">
      <h2>${localStorage.getItem("setName")}</h2>
        <img src="../Images/user.jpg" alt="buttonpng" />
      </a>
    </div>`;
