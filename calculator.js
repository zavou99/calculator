  let displayValue = 0;
  let a = "";
  let b = "";
  let firstOperator = null;
  let secondOperator = null;
  let result = null;

  const operate = (operator,a,b) => {
    switch (operator) {
          case "+":
            return a+b;
    
          case "-":
             return a-b;
  
           case "*":
             return a*b
 
           case "/":
        if (b === 0) {
            return "invalid equation";
        }
        else return a/b;
            default:
            break;   
        }
  };
  
  
  const updateDisplay = () => {
  document.getElementById("display").innerText = displayValue;
  };
  updateDisplay();

  
  const inputNumber= (number) => {
    if (firstOperator === null) {
    displayValue === 0 ? (displayValue = number) : (displayValue += number);
    } else {
      displayValue === a
     ? (displayValue = number)
     : (displayValue += number);
    }
    updateDisplay();
  };

  const inputOperator = (operator) => {
    if (!firstOperator && !secondOperator) {
       a= displayValue;
      firstOperator = operator;
    }
    
    else if (firstOperator && !secondOperator) {
     
      if (displayValue !== a) {
        secondOperator = operator;
        b= displayValue;
        result = operate(firstOperator, Number(a), Number(b));
        displayValue = roundAccurately(result, 10).toString();
        a= displayValue;
        result = null;
      } else {
        firstOperator = operator;
      }
    }

    else if (firstOperator && secondOperator) {
      b= displayValue;
      result = operate(secondOperator, Number(a), Number(b));
      secondOperator = operator;
      displayValue = roundAccurately(result, 10).toString();
      a= displayValue;
      result = null;
    }
    updateDisplay();
  };
  
  const inputEquals = () => {
    if (firstOperator === null) {
      displayValue = displayValue;
    } else if (secondOperator != null) {
      b = displayValue;
      result = operate(secondOperator, Number(a), Number(b));
      if (result === "nope") {
        displayValue = "nope";
      } else {
        displayValue = roundAccurately(result, 10).toString();
        a = displayValue;
        b = null;
        firstOperator = null;
        secondOperator = null;
        result = null;
      }
    } else {
      b= displayValue;
      result = operate(firstOperator, Number(a), Number(b));
      if (result === "nope") {
        displayValue = "nope";
      } else {
        displayValue = roundAccurately(result, 10).toString();
        a= displayValue;
        b = null;
        firstOperator = null;
        secondOperator = null;
        result = null;
      }
    }
    updateDisplay();
  };
  
  const inputDecimal = (dot) => {
    if (displayValue === a|| displayValue === b) {
      displayValue = "0";
      displayValue += dot;
    } else if (!displayValue.toString().includes(dot)) {
      displayValue += dot;
    }
    updateDisplay();
  };
  
  const inputPercent = () => {
    displayValue = (displayValue / 100).toString();
    updateDisplay();
  };
  
  const inputSign = () => {
    displayValue = (displayValue * -1).toString();
    updateDisplay();
  };
  
  const clearDisplay = () => {
    displayValue = 0;
    a= null;
   b = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
    updateDisplay();
  };
  
  const roundAccurately = (value, places) => {
    return parseFloat(Math.round(value + "e" + places) + "e-" + places);
  };