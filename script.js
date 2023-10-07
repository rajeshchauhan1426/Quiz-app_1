const questions = [
    {
      question: "Who is the most beautiful girl in this world ?",
      answers: [
        { text: "Roshni", correct: true },
        { text: "Ms Chauhan", correct: true },
        { text: "Rajesh Ki Wife", correct: true },
        { text: "Wifey", correct: true},
      ],
    },
    {
      question: "Who is the most attractive girl in this world ?",
      answers: [
        { text: "Roshni", correct: true },
        { text: "Ms Chauhan", correct: true },
        { text: "Rajesh Ki Wife", correct: true },
        { text: "Wifey", correct: true },
      ],
    },
    {
      question: "Who is the most Gorgeous girl in this world?",
      answers: [
        { text: "Roshni", correct: true },
        { text: "Ms Chauhan", correct: true },
        { text: "Rajesh Ki Wife", correct: true },
        { text: "Wifey", correct: true },
      ],
    },
    {
      question: "Who is the most sexy and hot girl in this world?",
      answers: [
        { text: "Roshni", correct: true },
        { text: "Ms Chauhan", correct: true },
        { text: "Rajesh Ki Wife", correct: true },
        { text: "Wifey", correct: true },
      ],
    },
    {
      question: "Which is the most naughty girl ?",
      answers: [
        { text: "Roshni", correct: true },
        { text: "Ms Chauhan", correct: true },
        { text: "Rajesh Ki Wife", correct: true },
        { text: "Wifey", correct: true },
      ],
    },
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
    // Clear previous answer buttons
    answerButtons.innerHTML = "";
  
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      button.addEventListener("click", () => {
        // Check if the clicked answer is correct and update the score
        if (answer.correct) {
          score++;
        }
  
        // Move to the next question or show the final score
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          showQuestion();
        } else {
          questionElement.innerHTML = "Quiz completed. Your score: " + score;
          answerButtons.innerHTML = "";
        }
      });
      answerButtons.appendChild(button);
    });
  }

  function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  

  function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrected = selectedBtn.dataset.correct === 'true';
    if(isCorrected) {
      selectedBtn.classList.add('correct');
    }else{
      selectedBtn.classList.add("incorrect");
    }
  }

  function showScore(){
    resetState();
    questionElement.innerHTML = ` You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML ='Play Again';
    nextButton.style.display = 'block';
  }



  startQuiz();
  