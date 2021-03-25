// DOM variables
var startButton = document.getElementById("start-button");
var question1 = document.getElementById("question");
var scoreEl = document.getElementById("score");
var answerOptions = document.getElementById("options");
var currentQuestionIndex = 0;
var header = document.getElementById("header");
var selectionResponse = document.getElementById("response");
var timeEl = document.querySelector(".time");
var form = document.getElementById("#form");
var secondsLeft = 30;

var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["string", "boolean", "alerts", "numbers"],
    solution: "alerts",
  },
  {
    question: "The conditions in an if/else statement is enclosed within___.",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    solution: "curly brackets",
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
    solution: "parentheses",
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
  question1.textContent = questions[currentQuestionIndex].question;
  answerOptions.innerHTML = "";
  for (var i = 0; i < 4; i++) {
    // console.log(questions[currentQuestionIndex].answers[i]);
    var button = document.createElement("button");
    button.textContent = questions[currentQuestionIndex].answers[i];
    button.setAttribute("value", questions[currentQuestionIndex].answers[i]);
    answerOptions.append(button);
  }
}
// Event listeners
startButton.addEventListener("click", function () {
  displayQuestion();
  header.innerHTML = "";
  countdown();
});

function countdown() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      // stops timer at 0
      clearInterval(timerInterval);
      // alert("Game over!")
      sendMessage();
    }
  }, 1000);
}

// change attributes to game over screen with form and score.
function sendMessage() {
  alert("Game over!");

  // time up or all questions answered then game over screen appears with form and score
}

answerOptions.addEventListener("click", function (event) {
  // console.log("You clicked an answer");
  var clickedElement = event.target;
  if (clickedElement.matches("button")) {
    if (clickedElement.value === questions[currentQuestionIndex].solution) {
      // selectionResponse.textContent = "Right!"
      alert("You're right!");
      
  
    } else {
      alert("You're wrong!");
      secondsLeft -= 10;

    }
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
    } else {
      // TODO: End the game

      clearInterval(timerInterval);
    }

    displayQuestion();
  }
});



