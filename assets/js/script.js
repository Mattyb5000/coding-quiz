// DOM variables
var startButton = document.querySelector("#start-button");
var question1 = document.querySelector("#question")

var questions = [
{
    question: "Commonly used data types DO NOT include:",
    answers: ["string", "boolean", "alerts", "numbers"],
    solution: "alerts"
},
{
    question: "The conditions in an if/else statement is enclosed within___.",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    solution: "curly brackets"
},
{
    question: "Arrays in JavaScript can be used to store ___.",
    answers: ["Numbers and strings", "other arrays", "booleans", "all of the above"],
    solution: "all of the above"
},
{
    question: "String values must be enclosed within ___ when being assigned to variables.",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    solution: "parentheses"
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "terminal/bash", "for loops", "console log"],
    solution: "console log"
}
];
// for (var i = 0; i < 5; i++) {
// //     // This is the block of code that will run each time
//     console.log("This is the current value of i: " + i + ".");
// }
//



// Function definitions
function startQuiz(){
   question1.textContent = questions[1].question
   for (var i = 0; i < questions[0].answers.length; i++){
    // console.log(questions[0].answers[i])
    document.getElementById('options').innerHTML += "<button>" + questions[1].answers[i] + "</button> <br/>"
}
}


// Event listeners
startButton.addEventListener("click", function () {
    startQuiz()
});
// Function calls