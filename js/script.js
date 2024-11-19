const startButton = document.getElementById('start')
startButton.addEventListener('click', startTest)
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


const questions = [
    {
        question: "1. If 4 apples cost $2, how much would 10 apples cost at the same rate?",
        answers: {
            a: "$4",
            b: "$6",
            c: "$5",
            d: "$7"
    },
    correctAnswer: "c"
},
{
    question: "2. If a class of 30 students has 18 girls, what percent of the class is girls?",
    answers: {
        a: "60%",
        b: "50%",
        c: "65%",
        d: "55%"
},
correctAnswer: "a"
},
{
    question: "3. What is the result of multiplying -5x4?",
    answers: {
        a: "20",
        b: "-15",
        c: "-20",
        d: "-25"
},
correctAnswer: "c"
},
{
    question: "4. Solve for x: 3x+5=20.",
    answers: {
        a: "x=15",
        b: "x=5",
        c: "x=-5",
        d: "x=3"
},
correctAnswer: "b"
},
{
    question: "5. A circle has a radius of 7cm. What is its diameter?",
    answers: {
        a: "7cm",
        b: "15cm",
        c: "10cm",
        d: "14cm"
},
correctAnswer: "d"
},
{
    question: "6. What is the mean of the following test scores: 80, 85, 90, 70, 95?",
    answers: {
        a: "84",
        b: "85",
        c: "82",
        d: "80"
},
correctAnswer: "a"
},
{
    question: "7. Subtract: 5.7-3.2",
    answers: {
        a: "3.3",
        b: "2.5",
        c: "2.7",
        d: "3.5"
},
correctAnswer: "b"
},
{
    question: "8. If a car travels 120 miles in 2 hours, how far will it travel in 5 hours at the same speed?",
    answers: {
        a: "400mi",
        b: "1000mi",
        c: "500mi",
        d: "300mi"
},
correctAnswer: "d"
},
{
    question: "9. Solve for x: -2x + 4 > 10",
    answers: {
        a: "x>3",
        b: "x<3",
        c: "x<-3",
        d: "x>-3"
},
correctAnswer: "c"
},
{
    question: "10. Sarah is buying a new phone. The phone costs $400, but she has a 15% off coupon. What is the discounted price of the phone?",
    answers: {
        a: "$340",
        b: "$60",
        c: "$300",
        d: "$70"
},
correctAnswer: "a"
},
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const answerElements = document.guerySelectorAll(".answer");

    const question = questions[currentWQuestion];

    questionElement.textContent = question.question;

    for (const key in question.answers) {
        const answer = question.answers[key];
        const answerElement = document.getElementById(key);
        answerElement.textContent = answer;
    }
}
function checkAnswer(selectedAnswer) {
    const question = questions[currentQuestion];

    if (selectedAnswer === question.correctAnswer) {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect");
    }
}

    currentQuestion++; 

    if(selectedAnswer !== question.correctAnswer) {
        alert("Incorrect, please try again.");

    // Do we need an else statement here?
    // On alert, goes back to current question to try again.
    }

    if (currentQuestion < question.length) {
        displayQuestion();
    } else {
        showResults();
    }



    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        const formData = new formData(event.target.form);
        console.log(formData);
    });


function displayScore() {
    alert('Your score: ${score} out of ${questions.length}');
}
displayQuestion();