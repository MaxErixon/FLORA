"use-strict";

const category = [
    {   id: 1,
        title: "Arts & Literature",
        icon: "../Images/Categories/arts.jpg",
        information: "This category contains questions and answers about literature. Questions about authors, books, poets, philosophers and literary figures."
    },
    {   id: 2,
        title: "Film & Tv",
        icon: "../Images/Categories/movies.jpg",
        information: "This category contains questions and answers about movies. Questions about movie titles, actors, directors, scripts and movie roles."
    },
    {   id: 3,
        title: "Food & Drink",
        icon: "../Images/Categories/food.jpg",
        information: "This category contains questions about food, recipes, international cuisine, wine, beer and other drinks."
    },
    {   id: 4,
        title: "General Knowledge",
        icon: "../Images/Categories/knowledge.jpg",
        information: "Quiz general education contains mixed questions and answers in general knowledge. Questions about geography, history, literature, music, film, science, sports and much more."
    },
    {   id: 5,
        title: "Geography",
        icon: "../Images/Categories/geography.jpg",
        information: "This category contains questions and answers about geography. Questions about countries, cities, mountains, seas, lakes and much more."
    },
    {   id: 6,
        title: "History",
        icon: "../Images/Categories/history.jpg",
        information: "This category contains questions and answers about history. Questions about historical events, periods, places and people."
    },
    {   id: 7,
        title: "Music",
        icon: "../Images/Categories/music.jpg",
        information: "This category contains questions and answers about music titles, artists, composers and styles."
    },
    {   id: 8,
        title: "Science",
        icon: "../Images/Categories/science.jpg",
        information: "This category contains questions and answers about science. Questions about mathematics, chemistry, astronomy and physics."
    },
    {   id: 9,
        title: "Society & Culture",
        icon: "../Images/Categories/society.jpg",
        information: "This category contains questions and answers about society and culture"
    },
    {   id: 10,
        title: "Sport & Leisure",
        icon: "../Images/Categories/sports.jpg",
        information: "This category contains questions and answers about sports and leisure. Questions about leisure, games, sports, athletes, sporting events and individual sporting achievements.."
    },

]

console.log(category[0].icon);

function createBoxesOfQuiz(){
    for(let i = 0; i < category.length; i++){
        let divId = document.getElementById("container"); 
        let categoryId = document.createElement("div");
        categoryId.className = "categoryBox";
        categoryId.id = "categoryId" + `${i}`;
        let categoryChildId = divId.appendChild(categoryId);
        let categoryTitleId = document.createElement("div");
        categoryTitleId.innerHTML = category[i].title;
    
        categoryTitleId.className = "titleBox";
        categoryChildId.appendChild(categoryTitleId); 
        
        let iconId = document.createElement("div");
        iconId.innerHTML = `
        <img src=${category[i].icon}>
        `
        iconId.className = "iconBox";
        categoryChildId.appendChild(iconId); 

        let click = document.getElementById(categoryId.id);
        click.addEventListener("click", function (){
            categoryEvent(categoryId.id);
        })   
    }   
}
function categoryEvent(categoryId){
    let hidden = document.getElementById("container");
    hidden.style.display = "none";

    let backDiv = document.createElement("div");
    backDiv.className = "backDiv";
    backDiv.innerHTML = `
    <button id = "backdiv" onclick = ${"btnbackIcon()"}>
     <img src="../Images/back-button.png" alt="buttonpng">
 </button>
    `
    document.body.appendChild(backDiv);

    let wrapper = document.getElementById("wrapper-category");
    let categoryDivTitle = document.createElement("div");
    categoryDivTitle.className = "categoryTitle";
    wrapper.appendChild(categoryDivTitle);

    let categoryDivLogo = document.createElement("div");
    categoryDivLogo.className = "categoryLogo";
  
    wrapper.appendChild(categoryDivLogo);

    let categoryDivInfo = document.createElement("div");
    categoryDivInfo.className = "categoryInfo";
    wrapper.appendChild(categoryDivInfo);

    if(categoryId == "categoryId0"){
        categoryDivTitle.innerHTML = category[0].title;
        categoryDivLogo.innerHTML = `
        <img src=${category[0].icon}>
        `
        categoryDivInfo.innerHTML = category[0].information;

    }else if(categoryId == "categoryId1"){
       categoryDivTitle.innerHTML = category[1].title;
       categoryDivLogo.innerHTML = `
       <img src=${category[1].icon}>
       `
       categoryDivInfo.innerHTML = category[1].information;
    
    }else if(categoryId == "categoryId2"){
        categoryDivTitle.innerHTML = category[2].title;
       categoryDivLogo.innerHTML = `
       <img src=${category[2].icon}>
       `
       categoryDivInfo.innerHTML = category[2].information;
    }else if(categoryId == "categoryId3"){
        categoryDivTitle.innerHTML = category[3].title;
       categoryDivLogo.innerHTML = `
       <img src=${category[3].icon}>
       `
       categoryDivInfo.innerHTML = category[3].information;
    }else if(categoryId == "categoryId4"){
        categoryDivTitle.innerHTML = category[4].title;
       categoryDivLogo.innerHTML = `
       <img src=${category[4].icon}>
       `
       categoryDivInfo.innerHTML = category[4].information;
    }else if(categoryId == "categoryId5"){
        categoryDivTitle.innerHTML = category[5].title;
       categoryDivLogo.innerHTML = `
       <img src=${category[5].icon}>
       `
       categoryDivInfo.innerHTML = category[5].information;

    }else if(categoryId == "categoryId6"){
        categoryDivTitle.innerHTML = category[6].title;
       categoryDivLogo.innerHTML = `
       <img src=${category[6].icon}>
       `
       categoryDivInfo.innerHTML = category[6].information;
    }else if(categoryId == "categoryId7"){
        categoryDivTitle.innerHTML = category[7].title;
       categoryDivLogo.innerHTML = `
       <img src=${category[7].icon}>
       `
       categoryDivInfo.innerHTML = category[7].information;
    }else if(categoryId == "categoryId8"){
        categoryDivTitle.innerHTML = category[8].title;
       categoryDivLogo.innerHTML = `
       <img src=${category[8].icon}>
       `
       categoryDivInfo.innerHTML = category[8].information;
    }else if(categoryId == "categoryId9"){
        categoryDivTitle.innerHTML = category[9].title;
       categoryDivLogo.innerHTML = `
       <img src=${category[9].icon}>
       `
       categoryDivInfo.innerHTML = category[9].information;
    }
    console.log(categoryId); 

    selectQuiz();
}

function createInputFields(){
   inputFields = document.getElementById("input-fields");
   inputFields.innerHTML = "";

    let text = document.createElement("div");
    text.innerHTML = "Number of questions";
    text.className = "textOfNumber";
    inputFields.appendChild(text);

    numberOfQuestion = document.createElement("input");
    numberOfQuestion.type = "text";
    numberOfQuestion.className = "first-input";
    inputFields.appendChild(numberOfQuestion);
    //numberOfQuestion.innerHTML = numberOfQuestion.value;
    
    let label = document.createElement("label");
    label.innerHTML = "Difficulty";
    label.className = "label";
    inputFields.appendChild(label);

    // This array below will be replaced by APi-call 
    let array = ["easy", "medium", "hard"];
    selectList = document.createElement("select");
    selectList.id = "mySelect";
    inputFields.append(selectList);
    
    for (let i = 0; i < array.length; i++) {
        let option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    }

}

function selectQuiz(){
    document.getElementById("clock").style.visibility = "hidden";
    createInputFields();
    let btnPlayQuiz = document.createElement("div");
    btnPlayQuiz.id = "button-play";
    btnPlayQuiz.innerHTML = `
    <button id = "btnPlayQuiz"> Play quiz </button>`
    document.body.appendChild(btnPlayQuiz);   
    
    let click = document.getElementById("button-play");
    click.addEventListener("click", function(){
        inputFields.innerText = numberOfQuestion.value;
        numberInput = inputFields.innerText; 
    
        if(isNaN(numberInput) || numberInput < 1 || numberInput > 50){
            alert("Sorry, number of question must be between 1-50");
            createInputFields();
        }else{
            levelOption = selectList.value;
            console.log(levelOption);
            playQuiz();
        }
    });
   
}

let inputFields = null;
let numberOfQuestion = null;
let categoryName = "";
let numberInput = "";
let levelOption = "";
let selectList= null;
let questionNumber = 1;


function playQuiz(){
    let categoryClass = document.getElementsByClassName("categoryTitle")
    let categoryNameBlank = categoryClass[0].innerHTML
    console.log(categoryNameBlank);
    let categoryNameAnd = categoryNameBlank.replace("&amp;","and");
    categoryName = categoryNameAnd.replace(/ /g, "_")  

    document.getElementById("clock").style.visibility = "visible";
    document.getElementById("wrapper-category").style.display = "none";
    document.getElementById("input-fields").style.display = "none";
    document.getElementById("backdiv").style.display = "none";
    document.getElementById("button-play").style.display = "none";

    let clockDiv = document.getElementById("clock"); 
    let clock = document.createElement("SPAN"); 
    clock.id = "seconds";
    clock.innerHTML = "1"
    clockDiv.appendChild(clock);

    timeLeft = 1;


function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}else if(timeLeft == 0){
       document.getElementById("clock").style.display="none";
       let overviewQuiz = document.getElementById("wrapper-quiz");
       let infoQuiz = document.getElementById("info-quiz");
       let timer = document.createElement("div");
       timer.className = "timer";
       infoQuiz.appendChild(timer);
       let time_txt = document.createElement("div");
       time_txt.className = "time_left_txt";
       time_txt.innerHTML = "Time Left";
       timer.appendChild(time_txt);
       let timer_sec = document.createElement("div");
       timer_sec.className = "timer_sec";
       timer_sec.innerHTML = "5";
       timer.appendChild(timer_sec);

       startTimer(5);


       let quizTitle = document.createElement("div");
       quizTitle.id = "quiz-title";
       infoQuiz.appendChild(quizTitle);

       let questionCount = document.createElement("div");
       questionCount.id = "question-count";
       infoQuiz.appendChild(questionCount);

       let question = document.createElement("div");
       question.id = "question";
       infoQuiz.appendChild(question);
       categoryName;

       let userScore = 0;
   
       for (let i = 0; i < 4; i++) {
        let questionBox = document.createElement("div");
        questionBox.className = "box-question";
        questionBox.id = "box-question" + `${i}`;
        overviewQuiz.appendChild(questionBox);
        let input = document.createElement("input");
        input.id = "input";
        input.type = "radio";

        input.name = "radio";
        questionBox.appendChild(input);

        let label = document.createElement("label");
        label.id = "label" + `${i}`;
        questionBox.appendChild(label);

        let radioButtons = document.querySelectorAll('input[name="radio"]');
        console.log(radioButtons.length);
      
        input.addEventListener("click", () =>{
            let i = 0; 
            for(let radioButton of radioButtons){
                if(radioButton.checked){
                    let label = document.getElementById("label" + `${i}`);
                    let color = document.getElementById("box-question" + `${i}`);
                    
                    clearInterval(counter);
                    if(correctAnswer == label.textContent){
                        color.style.backgroundColor = "green";
                        userScore += 1;
                        console.log(userScore);
                    }else{
                        color.style.backgroundColor = "red";
                        setCorrectAnswer();
                    }
                    nextQuestion.style.visibility = "visible";
                } if(`${questionNumber}` == `${data.length}`){
                    let finish = document.getElementById("results");
                    finish.style.visibility = "visible";
                    nextQuestion.style.visibility = "hidden";
                }
                i++
            }
            
        });

    }
    let nextQuestion = document.createElement("button");
        nextQuestion.id = "next-question";
        nextQuestion.innerHTML = "Next Question";
        overviewQuiz.appendChild(nextQuestion);
        nextQuestion.style.visibility = "hidden";

        nextQuestion.addEventListener("click", () =>{
        clearInterval(counter);
        startTimer(timeValue);
        questionNumber++;
        nextQuestion.style.visibility = "hidden";
        clearAnswerColor();
        clearButtonSelect();
        showQuestion();
    })
    getQuizQuestion(categoryName, numberInput, levelOption); 

    let showResults = document.createElement("button");
        showResults.id = "results";
        showResults.innerHTML = "Finish";
        overviewQuiz.appendChild(showResults);
        showResults.style.visibility = "hidden";

        showResults.addEventListener("click", () => {

            let hiddenTimer = document.getElementsByClassName("timer");
            hiddenTimer[0].style.visibility = "hidden";
            let hiddenQuestion = document.getElementById("question");
            hiddenQuestion.style.visibility = "hidden";
            let hiddenWrapperQuiz = document.getElementById("wrapper-quiz");
            hiddenWrapperQuiz.style.visibility = "hidden";
            showResults.style.visibility = "hidden";

            let results_box = document.getElementById("question-count");
            if(userScore < 3){
                results_box.innerHTML =  `${userScore}` + "out of" + `${data.length}`;
            }
            


            let pictureFinish = document.createElement("div");
            pictureFinish.id = "Finish-logo";
            pictureFinish.innerHTML = `
            <img src="../Images/congratulation.jpg">
           `
            infoQuiz.appendChild(pictureFinish);

            const date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let currentDate = `${day}-${month}-${year}`;
            let current_time = date.getHours() + ":" + 0 + date.getMinutes()+ ":" + date.getSeconds();
            console.log(currentDate);
    
            let dateInfo = document.createElement("div");
            dateInfo.id = "date";
            dateInfo.innerHTML = "Date" + ":" + currentDate;
            infoQuiz.appendChild(dateInfo);

            let timeInfo = document.createElement("div");
            timeInfo.id = "time";
            timeInfo.innerHTML = "Time" + ":" + current_time;
            infoQuiz.appendChild(timeInfo);
        

            let backToMenu = document.createElement("button");
            backToMenu.id = "back-menu";
            backToMenu.innerHTML = "Back to menu";
            infoQuiz.appendChild(backToMenu);

            backToMenu.addEventListener("click", () =>{
                location.href = "free-quiz.html";
            })
        })
        
    }
};
    let timeTex = document.getElementsByClassName("time_left_txt");
    let timeCount = document.getElementsByClassName("timer_sec");

    let timeValue = 5;
    let counter = 0;

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount[0].textContent = time;
        time--;
        if(time < 9){
            timeCount[0].textContent = "0" + timeCount[0].textContent;
        }
        
        if(time < 0 && questionNumber < data.length){
            clearInterval(counter);
            timeTex[0].textContent = "Time off";
            setCorrectAnswer();
            let showNextQuestion = document.getElementById("next-question");
            showNextQuestion.style.visibility = "visible";            
        }else if (questionNumber == data.length && time < 0){
            clearInterval(counter);
            timeTex[0].textContent = "Time off";
            setCorrectAnswer();
            let findShowResults = document.getElementById("results");
            findShowResults.style.visibility = "visible";
        }
    }      
}

//&& `${questionNumber}` == `${data.length}`
// let findShowResults = document.getElementById("results");
//findShowResults.style.visibility = "visible";
function setCorrectAnswer(){
    for(i = 0; i < 4; i++){
        let label = document.getElementById("label" + `${i}`);
        let color = document.getElementById("box-question" + `${i}`);
        if(correctAnswer == label.textContent){
            color.style.backgroundColor = "green";
        }
    }
}

function clearAnswerColor(){
    for(i = 0; i < 4; i++){ 
        let color = document.getElementById("box-question" + `${i}`);
        color.style.backgroundColor = "";
    }
}

function clearButtonSelect(){
        let radioButtons = document.querySelectorAll('input[name="radio"]');
        for(let radioButton of radioButtons){
            radioButton.checked = false;
        }
}

setTimeout(countdown, 1000);
}
let data = [];
let correctAnswer = "";

async function getQuizQuestion(category,limit,difficulty){
    let response = await fetch(`https://the-trivia-api.com/api/questions?categories=${category}&limit=${limit}&difficulty=${difficulty}`);
    data = await response.json();
    let quizTitle = document.getElementById("quiz-title");
    quizTitle.innerHTML = data[0].category;
    showQuestion();
}

function showQuestion(){
    let questionCounter = document.getElementById("question-count");
    questionCounter.innerText = `${questionNumber}` + "/" + `${data.length}`;

    let question = document.getElementById("question"); 
    question.innerHTML = data[questionNumber-1].question;
    console.log(data);

    let answers = [...data[questionNumber-1].incorrectAnswers];
    answers.push(data[questionNumber-1].correctAnswer);
    console.log(answers);
    correctAnswer = data[questionNumber-1].correctAnswer;

    let shuffledArray = answers.sort((a,b) => 0.8 - Math.random());
    console.log(shuffledArray);

   for (let i = 0; i < 4; i++) {
        let addAnswer = document.getElementById("label" + `${i}`); 
        addAnswer.textContent = shuffledArray[i];
    }

}

createBoxesOfQuiz();


