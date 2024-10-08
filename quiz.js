const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function startQuiz() {
    showQuestion(quizData[currentQuestion]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.addEventListener("click", selectAnswer);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedOption = e.target.innerText;
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
        score++;
    }
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        showQuestion(quizData[currentQuestion]);
    } else {
        showScore();
    }
}

function showScore() {
    questionElement.innerText = "Quiz Completed!";
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
    scoreElement.innerText = `Your Score: ${score}/${quizData.length}`;
    scoreElement.classList.add("score");
}

nextButton.addEventListener("click", selectAnswer);

startQuiz();
