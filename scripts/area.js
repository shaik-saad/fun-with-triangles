const inputs = document.querySelectorAll(".inputs")
const calculateBtn = document.querySelector("#calculate-btn")
const output = document.querySelector("#output")
const errorMessage = document.querySelector("#error-message")

function calculateArea(){
    // input
    const base = inputs[0].value
    const height = inputs[1].value

    // error handling
    if(base === "" || base === undefined || height === "" || height === undefined){
        return errorMessage.innerText = "Please enter the values."
    }
    if(base%1 !== 0 || height%1 !== 0){
        return errorMessage.innerText = "Please enter values in number."
    }
    if(base <= 0 || height <= 0){
        return errorMessage.innerText = "Invalid values. Please values above 0."
    }

    // processing
    var area = (Number(base) * Number(height)) / 2

    errorMessage.innerText = ""
    // output
    output. innerText = `The area of a triangle is ${area}`
}

calculateBtn.addEventListener("click", calculateArea)