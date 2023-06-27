document.addEventListener('DOMContentLoaded', () => {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.buttons button');
  
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const buttonText = button.innerText;
        screen.innerText += buttonText;
      });
    });
  
    const equalsButton = document.getElementById('equals');
  
    equalsButton.addEventListener('click', () => {
      try {
        const expression = screen.innerText;
        const result = evaluateExpression(expression);
        screen.innerText = result;
      } catch (error) {
        screen.innerText = 'Error';
      }
    });
  
    const clearButton = document.getElementById('clear');
  
    clearButton.addEventListener('click', () => {
      screen.innerText = '';
    });
  });
  
  function evaluateExpression(expression) {
    let result;
    if (expression.includes('+')) {
      const operands = expression.split('+');
      result = parseFloat(operands[0]) + parseFloat(operands[1]);
    } else if (expression.includes('-')) {
      const operands = expression.split('-');
      result = parseFloat(operands[0]) - parseFloat(operands[1]);
    } else if (expression.includes('*')) {
      const operands = expression.split('*');
      result = parseFloat(operands[0]) * parseFloat(operands[1]);
    } else if (expression.includes('/')) {
      const operands = expression.split('/');
      result = parseFloat(operands[0]) / parseFloat(operands[1]);
    }
    return result;
  }
  
