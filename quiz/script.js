const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Jupiter", "Mars", "Saturn", "Venus"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
];

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit-btn");

// Function to display quiz questions and options
function buildQuiz() {
  const output = [];

  quizData.forEach((currentQuestion, questionNumber) => {
    const options = [];

    for (let i = 0; i < currentQuestion.options.length; i++) {
      options.push(
        `<label>
                    <input type="radio" name="question${questionNumber}" value="${currentQuestion.options[i]}">
                    ${currentQuestion.options[i]}
                </label>`
      );
    }

    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
            <div class="options"> ${options.join("")} </div>`
    );
  });

  quizContainer.innerHTML = output.join("");
}

// Function to show results when user submits answers
function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".options");
  let score = 0;

  quizData.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.answer) {
      score += 2;
      answerContainers[questionNumber].style.color = "lightgreen";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }
  });

  resultsContainer.innerHTML = `You scored ${score} out of ${
    quizData.length * 2
  }`;
}

// Display quiz on page load
buildQuiz();

// Event listener for when user submits answers
submitButton.addEventListener("click", showResults);
