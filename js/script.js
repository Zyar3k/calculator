const buttons = document.querySelector('.buttons');
const resultDisplay = document.querySelector('.result');
const point = document.querySelector('.point');

let stringNumber,
    currentNumber,
    previousNumber,
    keepedOperator,
    result;

const clear = () => {
  currentNumber = 0;
  previousNumber = 0;
  keepedOperator = "";
  result = 0;
  stringNumber = currentNumber;
  resultDisplay.innerText = currentNumber;
  point.disabled = false;
};
clear();

const clearAll = () => {
  currentNumber = previousNumber;
  resultDisplay.innerText = currentNumber;
  stringNumber = "";
  point.disabled = false;
};

const calculation = (calc, a, b) => {
  switch (calc){
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      if(b !== 0){
      result = a / b;
      } else {
        return alert('You can\'t divide by 0!');
      }
      break;
  }  
};

const number = (evt) => {
  if (stringNumber === 0) {
    stringNumber = "";
  }
  stringNumber += evt;
  currentNumber = parseFloat(stringNumber.replace(point.innerText, "."));
  resultDisplay.innerText = stringNumber;
};

const operator = (evt) => {
  if (keepedOperator !== "") {
    calculation(keepedOperator, previousNumber, currentNumber);
    currentNumber = result;
  }
  if (stringNumber === "") {
    stringNumber = previousNumber;
  }
  previousNumber = currentNumber;
  keepedOperator = evt;
  stringNumber = "";
  point.disabled = false;
};

const equal = () => {
  calculation(keepedOperator, previousNumber, currentNumber);
  currentNumber = previousNumber = result;
  keepedOperator = "";
  stringNumber = currentNumber;
  if (point.innerText === ".") {
    resultDisplay.innerText = currentNumber;
  } else {
    resultDisplay.innerText = currentNumber.toString().replace(".", point.innerText);
  }
};

function sign() {
  stringNumber = resultDisplay.innerText;
  stringNumber += point.innerText;
  resultDisplay.innerText = stringNumber;
  point.disabled = true;
};

buttons.addEventListener('click', evt => {
  if(evt.target.className.includes("number")){
    number(evt.target.innerText);
  } else if (evt.target.className.includes("operator")) {
    operator(evt.target.innerText);
  } else if (evt.target.className.includes("clear")) {
    clear();
  } else if (evt.target.className.includes("allCle")) {
    clearAll();
  } else if (evt.target.className.includes("equal")) {
    equal();
  } else if (evt.target.className.includes("point")) {
    sign();
  }  
});