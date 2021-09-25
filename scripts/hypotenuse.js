const baseInput = document.querySelector("#base-value")
const heightInput = document.querySelector("#height-value")
const calculateBtn = document.querySelector("#calculate-btn")
const output = document.querySelector("#output")
const errorMessage = document.querySelector("#error-message")

function calculateSumOfSquares(a, b){
    const sum = a*a + b*b
    return sum
}

function calculateHypotenuse(){
    errorMessage.innerText = ""
    output.innerText = ""
    
    // input
    var baseInputValue = baseInput.value
    var heightInputValue = heightInput.value

    // error handling
    if(baseInputValue === "" || baseInputValue === undefined || heightInputValue === "" || heightInputValue === undefined){
        return errorMessage.innerText = "Please enter the values."
    }
    if(baseInputValue%1 !== 0 || heightInputValue%1 !== 0){
        return errorMessage.innerText = "Please enter values in number."
    }
    if(baseInputValue <= 0 || heightInputValue <= 0){
        return errorMessage.innerText = "Invalid values. Please values above 0."
    }

    // processing
    const sumOfSquares = calculateSumOfSquares(baseInputValue, heightInputValue)
    const hypotenuse = Math.sqrt(sumOfSquares)

    // output
    output.innerText = `The length of hypotenuse is ${hypotenuse}`
}

calculateBtn.addEventListener("click", calculateHypotenuse)