const questions = [
  {
    question: "who is the prime minister of India ?",
    answer: [
      { option: "Narendra modi", correct: "true" },
      { option: "Pawan kalyan", correct: "false" },
      { option: "Rahul gandi", correct: "false" },
      { option: "sharuk khan", correct: "false" },
    ],
  },
  {
    question: "Who is the Father of our Nation ?",
    answer: [
      { option: "Narendra modi", correct: "false" },
      { option: "Mahatma Gandhi", correct: "true" },
      { option: " Dr. B. R. Ambedkar", correct: "false" },
      { option: "patimbar jk", correct: "false" },
    ],
  },
  {
    question: "Who is known as Father of Indian Constitution ?",
    answer: [
      { option: "Dr. B. R. Ambedkar", correct: "true" },
      { option: "Mahatma Gandhi", correct: "false" },
      { option: "Rahul gandi", correct: "false" },
      { option: "Chandra bose", correct: "false" },
    ],
  },
  {
    question: "1024 Kilobytes is equal to ?",
    answer: [
      { option: "1024 Mb", correct: "false" },
      { option: "1Mb", correct: "true" },
      { option: "1024Gb", correct: "false" },
      { option: "Not defined", correct: "false" },
    ],
  },
  {
    question: "Which country are the Giza Pyramids in ?",
    answer: [
      { option: "spain", correct: "false" },
      { option: "turkey", correct: "false" },
      { option: "sri lanka", correct: "false" },
      { option: "Egypt", correct: "true" },
    ],
  },
];
const question = document.querySelector(".question");
const card = document.querySelector(".options");
const nextbutton = document.querySelector(".nxt");
let currentQuestion = 0;
let score = 0;

const startQuiz = function () {
  currentQuestion = 0;
  score = 0;
  nextbutton.innerHTML = "Next";
  displayQ();
};
const displayQ = function () {
  reset();
  let questionToBeDis = questions[currentQuestion];
  question.textContent = questionToBeDis.question;
  questionToBeDis.answer.forEach((i) => {
    const option = document.createElement("button");
    option.textContent = i.option;
    option.classList.add("btn");
    card.appendChild(option);
    option.dataset.correct = i.correct;
    option.addEventListener("click", answerdisp);
  });
};
function reset() {
  while (card.firstChild) {
    card.removeChild(card.firstChild);
  }
  nextbutton.style.display = "none";
}
startQuiz();
function answerdisp(e) {
  const selopt = e.target;
  const right = selopt.dataset.correct === "true";
  if (right) {
    selopt.classList.add("correct");
    score++;
  } else {
    selopt.classList.add("wrong");
  }
  Array.from(card.children).forEach((i) => {
    if (i.dataset.correct === "true") {
      i.classList.add("correct");
    }
    i.disabled = true;
    nextbutton.style.display = "block";
  });
}
function showscore() {
  reset();
  card.innerHTML = `you have scored ${score} out of ${questions.length}`;
  nextbutton.style.display = "block";
  nextbutton.textContent = "Play again";
}
function nxtquestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQ();
  } else {
    showscore();
  }
}
nextbutton.addEventListener("click", () => {
  if (currentQuestion < questions.length) {
    nxtquestion();
  } else {
    startQuiz();
  }
});
