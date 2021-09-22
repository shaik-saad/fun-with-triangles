const quizForm = document.querySelector("#quiz-form")
const submitQuizForm = document.querySelector("#submit-quiz-btn")
const output = document.querySelector("#output")

const correctAnswers = [
    "90°",
    "Right angled",
    "One right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",
  ];

function calculateScore(){
    var score = 0
    var index = 0

    const quizFormData = new FormData(quizForm) // input

    // processing
    for(let value of quizFormData.values()){
        if(value === correctAnswers[index]){
            score = score + 1
        }
        index++
    }
    // output
    output.innerText = "The score is " + score
}

submitQuizForm.addEventListener("click", calculateScore)