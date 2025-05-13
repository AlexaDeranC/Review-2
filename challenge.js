//Questions array ..  
    const questions = [
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Module", "Digital Output Manager"],
    answer: "Document Object Model"
  },
  {
    question: "Which method adds an event listener?",
    options: ["addEventListener", "listenTo", "onClick"],
    answer: "addEventListener"
  },
  //add more questions if you like
  {
    question: "Which symbol is used for 'strict equal to' in JavaScript?",
    options: ["==", "===", "="],
    answer: "==="
  },
  {
    question: "What does `getElementById()` do?",
    options: ["Changes an element’s text", "Finds an element by its ID", "Adds an event listener"],
    answer: "Finds an element by its ID"
  },
  {
    question: "Which HTML tag is used to link JavaScript files?",
    options: ["<script>", "<js>", "<link>"],
    answer: "<script>"
  },
  {
    question: "Which property changes the background color of an element?",
    options: ["element.color", "element.style.backgroundColor", "element.bgColor"],
    answer: "element.style.backgroundColor"
  },
  {
    question: "Which keyword declares a variable in JavaScript?",
    options: ["let", "var", "const", "All of the above"],
    answer: "All of the above"
  }
];

  
  //Your Quiz game code here 
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("answers");
const nextBtn = document.getElementById("next");
const scoreEl = document.getElementById("score");



let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selectAnswer(button, currentQuestion.answer));
    optionsEl.appendChild(button);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  optionsEl.innerHTML = "";
}

function selectAnswer(selectedBtn, correctAnswer) {
  const allButtons = optionsEl.querySelectorAll("button");
  allButtons.forEach(btn => btn.disabled = true);

  if (selectedBtn.innerText === correctAnswer) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
    allButtons.forEach(btn => {
      if (btn.innerText === correctAnswer) {
        btn.classList.add("correct");
      }
    });
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionEl.innerText = `Quiz Finished! 🎉 Your score: ${score} / ${questions.length}`;
  nextBtn.innerText = "Restart";
  nextBtn.style.display = "inline-block";
  nextBtn.onclick = startQuiz;
}

// Start the game
startQuiz();


