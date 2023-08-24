const display = document.querySelector("#display");
const expressionCalc = document.querySelector('#displayOperations');
const number = document.querySelectorAll("[id*=key]");
const operators = document.querySelectorAll("[id*=operator]");


let newNumber = true;
let operator;
let previousNumber;

const changeDisplay = (text) => {
  if (newNumber) {
    display.textContent = text;
    newNumber = false;
  } else {
    display.textContent += text;
  }
};
const insertNumber = (element) => changeDisplay(element.target.textContent);

number.forEach((number) => number.addEventListener("click", insertNumber));

const clearDisplay = () => {
  let clear = document.querySelector("#keyce");

  clear.addEventListener("click", () => {
    display.textContent = "";
    previousNumber = '';
    expressionCalc.textContent = '';
  });
};

const backspace = () => {
  let backspace = document.querySelector("#backspace");

  backspace.addEventListener("click", () => {
    if (display.textContent.length > 0) {
      display.textContent = display.textContent.slice(0, -1);
    }
  });
};

const operationPending = () => operator !== undefined;

const calc = () => {
  if (operationPending()) {
    const currentNumber = parseFloat(display.textContent);
    newNumber = true;
    
    if (operator == "+") {
      changeDisplay(previousNumber + currentNumber);
    } else if(operator == "-"){
      changeDisplay(previousNumber - currentNumber);
    } else if(operator == "X") {
      changeDisplay(previousNumber * currentNumber);
    } else if(operator == "÷"){
      changeDisplay(previousNumber / currentNumber);
    }
  }


};

const equal = () => {
  let equal = document.querySelector("#keyequal");

  equal.addEventListener('click', () =>{
    calc();
  });
};

const selectOperator = (event) => {
  


  if (!newNumber) {
    //calc()
    newNumber = true;
    operator = event.target.textContent;
    previousNumber = parseFloat(display.textContent);

    expressionCalc.textContent = previousNumber+operator;

   


    console.log(expressionCalc);
  }
};

operators.forEach((operator) =>
  operator.addEventListener("click", selectOperator)
);

equal();
backspace();
clearDisplay();
