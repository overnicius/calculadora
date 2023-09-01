const display = document.querySelector("#display");
const expressionCalc = document.querySelector("#displayOperations");
const number = document.querySelectorAll("[id*=key]");
const operators = document.querySelectorAll("[id*=operator]");

let newNumber = true;
let operator;
let previousNumber;
let currentNumber;

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
    previousNumber = "";
    expressionCalc.textContent = "";
  });
};

const clearCurrentNumber = () => {
  let clear = document.querySelector("#keyc");

  clear.addEventListener("click", () => {
    display.textContent = "";
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
    currentNumber = parseFloat(display.textContent);
    newNumber = true;

    if (operator == "+") {
      changeDisplay(previousNumber + currentNumber);
    } else if (operator == "-") {
      changeDisplay(previousNumber - currentNumber);
    } else if (operator == "X") {
      changeDisplay(previousNumber * currentNumber);
    } else if (operator == "÷") {
      changeDisplay(previousNumber / currentNumber);
    } else if (operator == "%") {
      changeDisplay((previousNumber * currentNumber) / 100);
    } else if (operator == "x²") {
      square();
    } else if (operator == "√") {
      radic();
    } else if (operator == "¹/ₓ") {
      fraction();
    }
  }
};

const square = () => {
  let sqr = document.querySelector("#operatorsqr");

  sqr.addEventListener("click", () => {
    previousNumber = display.textContent;
    currentNumber = display.textContent;
    newNumber = true;

    changeDisplay(currentNumber * currentNumber);
    expressionCalc.textContent = `sqr(${previousNumber})`;

    console.log(currentNumber);
    console.log(previousNumber);
  });
};

const radic = () => {
  let radicv = document.querySelector("#operatorv");
  radicv.addEventListener("click", () => {
    previousNumber = display.textContent;
    newNumber = true;
    currentNumber = display.textContent;

    currentNumber = Math.sqrt(currentNumber);

    expressionCalc.textContent = previousNumber + operator;
    changeDisplay(currentNumber.toFixed(2));
  });
};

const inverterSinal = () => {
  newNumber = true;
  changeDisplay(display.textContent * -1);
};

document
  .querySelector("#operatornegative")
  .addEventListener("click", inverterSinal);

const equal = () => {
  let equal = document.querySelector("#keyequal");
  newNumber = true;
  currentNumber = display.textContent;

  equal.addEventListener("click", () => {
    calc();

    expressionCalc.textContent =
      previousNumber + " " + operator + " " + currentNumber + " =";

    console.log(previousNumber);
    console.log(currentNumber);
  });
};

const fraction = () => {
  let fr = document.querySelector("#operatorfr");

  fr.addEventListener("click", () => {
    previousNumber = display.textContent;
    newNumber = true;

    currentNumber = display.textContent;
    let fraction = `1/(${previousNumber})`;
    let result = 1 / currentNumber;
    changeDisplay(result.toFixed(2));
    expressionCalc.textContent = fraction;

    console.log(fraction);
  });
};

const selectOperator = (event) => {
  if (!newNumber) {
    newNumber = true;
    operator = event.target.textContent;

    previousNumber = parseFloat(display.textContent);

    //expressionCalc.textContent = previousNumber + operator;
  }
};

operators.forEach((operator) =>
  operator.addEventListener("click", selectOperator)
);

radic();
fraction();
square();
equal();
backspace();
clearDisplay();
clearCurrentNumber();
