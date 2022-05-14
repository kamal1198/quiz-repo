// use start button to load first question
var startbutton = document.getElementById("startbtn");
var quiz = document.getElementById("quiz");
let currQ = 1;
startbutton.addEventListener("click", function () {
    var promt = document.getElementById("promt");



    promt.setAttribute("class", "hide")
    quiz.removeAttribute("class");
    buildquestion()
})
var question = [
    {
        text: "question 1",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        text: "question 2",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        text: "question 3",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        text: "question 4",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        text: "question 5",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
];

function buildquestion() {
    var questiontext = document.getElementById("questiontext");
    questiontext.textContent = question[currQ].text;
    var buttonbox = document.getElementById("buttonbox");
    question[currQ].choices.forEach(function (choice) {
        var choicebtn = document.createElement("button");
        choicebtn.textContent = choice;
        choicebtn.setAttribute("value", choice)
        choicebtn.onclick = function () {
            if (this.value === question[currQ].answer) {
                console.log("correct");
            } else {
                console.log("wrong");
                // timer-=10;   
            }
        }
        
        var time = question.length * 15;
        const timerInt = setInterval(function () {
            const timerEl = document.getElementById('timer');
            timerEl.innerText = time--;
            if (time <= 0) { 
                time=0;
                clearInterval(timerInt); 
                // TODO display endscreen
        

            }
        }, 1000);

        
  
  
     

        buttonbox.appendChild(choicebtn)
    });
}




