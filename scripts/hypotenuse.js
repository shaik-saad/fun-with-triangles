const baseInput = document.querySelector("#base-value")
const heightInput = document.querySelector("#height-value")
const calculateBtn = document.querySelector("#calculate-btn")
const output = document.querySelector("#output")

function calculateSumOfSquares(a, b){
    const sum = a*a + b*b
    return sum
}

function calculateHypotenuse(){
    // input
    var baseInputValue = Number(baseInput.value)
    var heightInputValue = Number(heightInput.value)

    // processing
    const sumOfSquares = calculateSumOfSquares(baseInputValue, heightInputValue)
    const hypotenuse = Math.sqrt(sumOfSquares)

    // output
    output.innerText = `The length of hypotenuse is ${hypotenuse}`
}

calculateBtn.addEventListener("click", calculateHypotenuse)