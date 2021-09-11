// DOM variables
var startButton = document.getElementById("start-button");
var currentQuestion = document.getElementById("question");
var answerOptions = document.getElementById("options");
var currentQuestionIndex = 0;
var header = document.getElementById("header");
var selectionResponse = document.getElementById("response");
var timer = document.querySelector("#time");
var form = document.getElementById("#form");
var timeLeft = 30;
var highScore = document.getElementById("highScore")
var isGameOver = false;


var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["string", "boolean", "alerts", "numbers"],
    solution: "alerts",
  },
  {
    question: "The conditions in an if/else statement is enclosed within___.",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    solution: "parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store ___.",
    answers: [
      "Numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    solution: "all of the above",
  },
  {
    question:
      "String values must be enclosed within ___ when being assigned to variables.",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    solution: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "terminal/bash", "for loops", "console log"],
    solution: "console log",
  },
];

// Function definitions
function displayQuestion() {
  currentQuestion.textContent = questions[currentQuestionIndex].question;
  answerOptions.innerHTML = "";
  for (var i = 0; i < 4; i++) {
    var button = document.createElement("button");
    button.textContent = questions[currentQuestionIndex].answers[i];
    button.setAttribute("value", questions[currentQuestionIndex].answers[i]);
    answerOptions.append(button);
  }
}

function timerInterval(){
  t = setInterval(countdown, 1000)
 }
 
 function endTimer() {
   clearInterval(t)
 }
 
 function countdown() {
   timeLeft--;
   timer.textContent = `Timer: ${timeLeft}`;
   if (timeLeft <= 0) {
     gameOver(); 
   }
 }
 
 function gameOver() {
  //  if(!isGameOver){
     timer.textContent = `Timer: 0`;
     alert("Time's up!")
     endTimer()
  //  }
 }

 function gameWon() {
    var initials = prompt("You win! Enter your initials!").toUpperCase()
    while (initials === ""){
      initials = prompt("Please enter your initials to continue.").toUpperCase()
    }
    highScore.innerHTML = `High Score: ${timeLeft}pts ${initials}`
    timer.textContent = `Timer:`;
  }


// Event listeners
startButton.addEventListener("click", function () {
  displayQuestion(); // DISPLAYS QUESTION FUNCTION
  // header.innerHTML = ""; // CLEARS HEADING, PARAGRAPH, AND START BUTTON
  header.classList.add("hide")
  timerInterval()
});

answerOptions.addEventListener("click", function (event) {
  var clickedElement = event.target;
  if (clickedElement.matches("button")) {
    if (clickedElement.value === questions[currentQuestionIndex].solution) {
      alert("You're right!");
    } else {
      alert("You're wrong!");
      timeLeft -= 10;
    }
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
    }  else if(currentQuestionIndex = questions.length - 1){
      endTimer()
      gameWon()
    }
    displayQuestion();
  } 
});


