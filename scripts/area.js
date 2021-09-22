const inputs = document.querySelectorAll(".inputs")
const calculateBtn = document.querySelector("#calculate-btn")
const output = document.querySelector("#output")

console.log(inputs)
function calculateArea(){
    // input
    const base = Number(inputs[0].value)
    const height = Number(inputs[1].value)

    // processing
    var area = (base * height) / 2

    // output
    output. innerText = `The area of a triangle is ${area}`
}

calculateBtn.addEventListener("click", calculateArea)