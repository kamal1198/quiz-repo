// use start button to load first question
var startbutton = document.getElementById("startbtn");
var quiz = document.getElementById("quiz");
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
    questiontext.textContent = question[0].text;
    var buttonbox = document.getElementById("buttonbox");
    question[0].choices.forEach(function (choice) {
        var choicebtn = document.createElement("button");
        choicebtn.textContent = choice;
        choicebtn.setAttribute("value", choice)
        choicebtn.onclick = function () {
            if (this.value === question[0].answer) {
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




