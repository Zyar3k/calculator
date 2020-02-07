const buttons = document.querySelector('.buttons');
const resultDisplay = document.querySelector('.result');

const clear = () => {
  console.log('clear');
}

const clearAll = () => {
  console.log('clearAll');
}

const calculation = () => {
  
}

const number = () => {
  
}

const operator = () => {
  
}

const equal = () => {
  
}

// listeners

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
  }
  
});