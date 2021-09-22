const inputs = document.querySelectorAll(".angle-inputs")
const output = document.querySelector("#output-p")
const isTraingle = document.querySelector("#is-triangle-btn")

function checkIsTriangle(){
    console.log(inputs[0].value, inputs[1].value, inputs[2].value)
}

isTraingle.addEventListener("click", checkIsTriangle)