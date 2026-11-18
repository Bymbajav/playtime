const urdun = document.getElementById("urdun");

let fristNumber = 0;
let secondNumber = 0;
let action = null;

const getnumber = (number) => {
  urdun.textContent = number;
  if (action && fristNumber > 0) {
    secondNumber = secondNumber * 10 + number;
    urdun.textContent = secondNumber;
  } else {
    fristNumber = fristNumber * 10 + number;
    urdun.textContent = fristNumber;
  }
};

const getaction = (uildel) => {
  action = uildel;
};

const showHariu = () => {
  if (action === "nemeh") {
    hariu = fristNumber + secondNumber;
    urdun.textContent = hariu;
    action = null;
    secondNumber = 0;
  } else if (action === "hasah") {
    hariu = fristNumber - secondNumber;
    urdun.textContent = hariu;
    action = null;
    fristNumber = hariu;
    secondNumber = 0;
  }
};
