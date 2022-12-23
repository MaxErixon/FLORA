//Clears all the inputs
function clearInputs() {
  question.value = "";
  correctAnswer.value = "";
  incorrectAnswer1.value = "";
  incorrectAnswer2.value = "";
  incorrectAnswer3.value = "";
  category.value = null;
}

//Alert for sucessfully created question
function questionCreated() {
  let answer = confirm("Your questions has been added!");
  if (answer === true) {
    console.log(answer);
    location.href = "home-account.html";
  } else {
    window.location.reload();
  }
}

//Alert for missing info
function missingInputs() {
  alert("Please enter all the required information!");
}

//Submits a question to the DB with the values of the inputs
function submitQuestion() {
  let category = document.querySelector("#category");

  let question = document.querySelector("#question");

  let correctAnswer = document.querySelector("#correctAnswer");

  let incorrectAnswer1 = document.querySelector("#incorrectAnswer1");
  let incorrectAnswer2 = document.querySelector("#incorrectAnswer2");
  let incorrectAnswer3 = document.querySelector("#incorrectAnswer3");

  let body_post = {
    category: category.value,
    question: question.value,
    correctAnswer: correctAnswer.value,
    incorrectAnswer1: incorrectAnswer1.value,
    incorrectAnswer2: incorrectAnswer2.value,
    incorrectAnswer3: incorrectAnswer3.value,
  };

  let rqt_post = new Request("/APIs/Questions/add.php", {
    method: "POST",
    body: JSON.stringify(body_post),
    headers: { "Content-type": "application/json" },
  });
  fetch(rqt_post)
    .then((response) => {
      if (response.status != 200) {
        missingInputs();
      }

      return response.json();
    })
    .then((resource) => {
      if (resource.error == "Missing text or category") {
      } else {
        clearInputs();
        questionCreated();
      }
    });
}

document.querySelector("#submitbtn").addEventListener("click", submitQuestion);
