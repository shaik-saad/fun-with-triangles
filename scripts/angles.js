const inputs = document.querySelectorAll(".inputs")
const output = document.querySelector("#output")
const isTraingle = document.querySelector("#is-triangle-btn")
const errorMessage = document.querySelector("#error-message")

function checkIsTriangle(){
    errorMessage.innerText = ""
    output.innerText = ""
    // processing
    var sum = 0
    for( var i = 0; i < inputs.length; i ++){
        // error handling
        if(inputs[i].value === "" || inputs[i].value === undefined){
            return errorMessage.innerText = "Please enter angle " + (i+1) + " value"
        }
        if(inputs[i].value%1 !== 0){
            return errorMessage.innerText = "Please enter angle " + (i+1) + " in number"
        }
        if(inputs[i].value <= 0){
            return errorMessage.innerText = "Invalid angles. Please enter angle " + (i+1) + " above 0 degrees"
        }
        // adding angles
        sum = sum + Number(inputs[i].value)
    }
    // output
    if( sum === 180){
        output.innerText = "Yay! The angles you've entered form a triangle."
    } else{
        output.innerText = "Oops! The angles you've entered does not form a triangle."
    }
}

isTraingle.addEventListener("click", checkIsTriangle)