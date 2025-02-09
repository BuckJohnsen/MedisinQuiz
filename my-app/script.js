let currentCategory = ""
let currentQuestionIndex = 0
let flashcards = {}

// Simulated JSON data (replace this with actual JSON data)
const flashcardsData = {
  Histologi: [
    {
      question: "What is the main function of epithelial tissue?",
      answers: ["Protection", "Movement", "Digestion", "Circulation"],
      correct_answer: "Protection",
    },
    // Add more questions for Histologi
  ],
  Metabolisme: [
    {
      question: "Which process produces ATP in the absence of oxygen?",
      answers: ["Glycolysis", "Krebs cycle", "Electron transport chain", "Oxidative phosphorylation"],
      correct_answer: "Glycolysis",
    },
    // Add more questions for Metabolisme
  ],
  // Add more categories and questions
}

document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = document.querySelectorAll(".category-btn")
  const flashcardDiv = document.getElementById("flashcard")
  const questionElement = document.getElementById("question")
  const answerButtons = document.querySelectorAll(".answer-btn")
  const backButton = document.getElementById("back-btn")
  const nextButton = document.getElementById("next-btn")

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentCategory = button.dataset.category
      currentQuestionIndex = 0
      flashcards = flashcardsData[currentCategory]
      showQuestion()
      document.getElementById("categories").classList.add("hidden")
      flashcardDiv.classList.remove("hidden")
    })
  })

  answerButtons.forEach((button) => {
    button.addEventListener("click", () => checkAnswer(button))
  })

  backButton.addEventListener("click", () => {
    flashcardDiv.classList.add("hidden")
    document.getElementById("categories").classList.remove("hidden")
  })

  nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    if (currentQuestionIndex >= flashcards.length) {
      currentQuestionIndex = 0
    }
    showQuestion()
  })

  function showQuestion() {
    const currentQuestion = flashcards[currentQuestionIndex]
    questionElement.textContent = currentQuestion.question

    for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].textContent = currentQuestion.answers[i]
      answerButtons[i].classList.remove("correct", "incorrect")
    }
  }

  function checkAnswer(button) {
    const currentQuestion = flashcards[currentQuestionIndex]
    const selectedAnswer = button.textContent

    answerButtons.forEach((btn) => {
      if (btn.textContent === currentQuestion.correct_answer) {
        btn.classList.add("correct")
      }
    })

    if (selectedAnswer === currentQuestion.correct_answer) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  }
})

