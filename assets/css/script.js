// use start button to load first question
var startbutton = document.getElementById("startbtn");
var buttonbox = document.getElementById('buttonbox');
var quiz = document.getElementById("quiz");
var numberscores = 0;
var highscorearray = JSON.parse(localStorage.getItem("highscores")) || [];
let currQ = 0;
var time;
var timerInt;
var timerEl;
startbutton.addEventListener("click", function () {
    var promt = document.getElementById("promt");

    promt.setAttribute("class", "hide")
    quiz.removeAttribute("class");
    buildquestion()
    time = question.length * 15;
    console.log(time);
    timerInt = setInterval(function () {
        timerEl = document.getElementById('timer');
        timerEl.innerText = "time: " + time--;
        if (time <= 0) {
            time = 0;
            timerEl.innerText = time;
            clearInterval(timerInt);
        }
    }, 1000);
})
var question = [
    {
        text: "Arrays in JavaScript can be used to store",
        choices: ["all of the above", "booleans", "other arrays", "numbers and strings"],
        answer: "a"
    },
    {
        text: "String values must be enclosed within when being assigned to variables",
        choices: ["curly brackets", "commas", "quotes", "parenthesis"],
        answer: "a"
    },
    {
        text: "Commonly used data types DO Not Include",
        choices: ["booleans", "strings", "alerts", "numbers"],
        answer: "a"
    },
    {
        text: "The condition in an if / else statement is enclosed with",
        choices: ["parenthesis", "curly brackets", "square brackets", "quotes"],
        answer: "a"
    },
    {
        text: "A very useful tool used during development and debugging for printing content to the debugger is",
        choices: ["for loops", "javascript", "terminal/bash", "console.log"],
        answer: "a"
    },
];
function buildquestion() {
    buttonbox.innerHTML = '';
    var questiontext = document.getElementById("questiontext");
    console.log(currQ)
    questiontext.textContent = question[currQ].text;

    question[currQ].choices.forEach(function (choice) {
        var choicebtn = document.createElement("button");
        choicebtn.textContent = choice;
        choicebtn.setAttribute("value", choice)
        choicebtn.onclick = function () {
            if (this.value === question[currQ].answer) {
                console.log("correct");
                numberscores++;
            } else {
                console.log("wrong");
                time -= 10;
            }
            currQ = currQ + 1;
            if (currQ < question.length) {
                buildquestion()
            } else {
                endgame()
            }
            //display scores

        }

        buttonbox.appendChild(choicebtn)
    });
}
function endgame(){
    //hide quiz
    var  fScoreEl = document.getElementById("f-score");
   
timerEl.setAttribute("class","hide")
    quiz.setAttribute("class","hide")  
    //get remaining time and set to variable
    var timebonus=time;
    clearInterval(timerInt)
    fScoreEl.textContent = time;
    // var highscorearray=JSON.parse(localStorage.getItem("highscores"))||[];
    console.log(highscorearray)

    var userscore={
        initials:"",
score:numberscores*timebonus
    }
    highscorearray.push(userscore)
    console.log(highscorearray)
    localStorage.setItem()
    //get users initial
}





