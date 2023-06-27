document.addEventListener('DOMContentLoaded', function() {
var buttons = document.querySelectorAll('.buttons button')
const screen = document.querySelector('.screen')

// function calculate(button){
//     console.log("ok")
//     const value = button.textContent
//     if(value == "CLEAR") {calculation = [], screen.textContent = "."}
//     else if(value == "="){
//         screen.textContent = eval(calcstring)
//     }
//     else {
//         calculation.push(value)
//         calcstring = calculation.join('')
//         screen.textContent = calcstring
//     }

// }

const equalsButton = document.getElementById('equals');

equalsButton.addEventListener('click', function() {
    try {
        // console.log(typeof(screen.innerHTML))
        const myArray = screen.innerHTML.split(" ");
        console.log(myArray.slice(-1).join(""))
        let result = eval(myArray.slice(-1).join(""));

        console.log("Result = " + result)
        screen.textContent = `${result}`;
    } catch (error) {
        screen.textContent = 'Error';
    }
});

const clearButton = document.getElementById('clear');
  
clearButton.addEventListener('click', function() {
screen.textContent = '‎'})

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      let buttonText = this.textContent;

      screen.textContent += buttonText;
    });
  });
})