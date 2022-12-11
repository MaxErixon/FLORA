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
    if(categoryId == "categoryId0"){
        location.href = "home-free.html";
    }else if(categoryId == "categoryId1"){
        location.href = "home-free.html";
    }else if(categoryId == "categoryId2"){
        location.href = "home-free.html";
    }else if(categoryId == "categoryId3"){
        location.href = "home-free.html";
    }else if(categoryId == "categoryId4"){
        location.href = "home-free.html";
    }else if(categoryId == "categoryId5"){
        location.href = "home-free.html";
    }else if(categoryId == "categoryId6"){
        location.href = "home-free.html";
    }else if(categoryId == "categoryId7"){
        location.href = "home-free.html";
    }else if(categoryId == "categoryId8"){
        location.href = "home-free.html";
    }else if(categoryId == "categoryId9"){
        location.href = "home-free.html";
    }
    console.log(categoryId); 
}
createBoxesOfQuiz();