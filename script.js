const buttons = document.querySelectorAll('button')
const screen = document.querySelector('.screen')

let calculation = []
let calcstring

function calculate(button){
    const value = button.textContent
    if(value == "CLEAR") {calculation = [], screen.textContent = "."}
    else if(value == "="){
        screen.textContent = eval(calcstring)
    }
    else {
        calculation.push(value)
        calcstring = calculation.join('')
        screen.textContent = calcstring
    }

}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))