const inputs = document.querySelectorAll(".angle-inputs")
const output = document.querySelector("#output-p")
const isTraingle = document.querySelector("#is-triangle-btn")

function checkIsTriangle(){
    var sum = 0
    for( var i = 0; i < inputs.length; i ++){
        sum = sum + Number(inputs[i].value)
    }
    
    if( sum === 180){
        output.innerText = "Yay! The angles you've entered form a triangle."
    } else{
        output.innerText = "Oops! The angles you've entered does not form a triangle."
    }
}

isTraingle.addEventListener("click", checkIsTriangle)