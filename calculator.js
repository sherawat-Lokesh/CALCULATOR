"use strict";

// prettier-ignore
import {display, mathBtn,clearBtn,logBtn,equalBtn,operationBtn,backBtn} from "./domSelect.js";

// prettier-ignore
let finalResult = 0,operationBtnClickTime = 1,whichOperator,calcData = "";

mathBtn.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    if (display.value.length >= 15) {
      sizeCheck();
    }
    if (/[+-/x]/g.test(display.value)) {
      operationBtnClickTime--;
    }
    display.value += e.target.value;
  })
);

operationBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (operationBtnClickTime !== 0) return;
    if (operationBtnClickTime === 0) {
      forCalculationSolving();
    }
  });
});
//equal btn click solution
equalBtn.addEventListener("click", forCalculationSolving);

function forCalculationSolving() {
  calcData = display.value;
  console.log(whichOperator);
  const [firstNum, secondNum] = calcData.split(whichOperator);
  if (!firstNum && !secondNum) return;
  operationBtnClickTime = 1;
  switch (whichOperator) {
    case "x": {
      finalResult = firstNum * secondNum;
      display.value = finalResult;
      return;
    }
    case "+": {
      finalResult = +firstNum + +secondNum;
      display.value = finalResult;
      return;
    }
    case "-": {
      finalResult = firstNum - secondNum;
      display.value = finalResult;
      return;
    }
    case "/": {
      finalResult = firstNum / secondNum;
      display.value = finalResult;
      return;
    }
  }
}

operationBtn.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    if (operationBtnClickTime === 1) {
      if (/[+-/x]/g.test(display.value)) {
        switch (display.value.slice(-1)) {
          case "x": {
            display.value = display.value.slice(0, -1);
            display.value += e.target.value;
            whichOperator = e.target.value;
            return;
          }
          case "+": {
            display.value = display.value.slice(0, -1);
            display.value += e.target.value;
            whichOperator = e.target.value;
            return;
          }
          case "-": {
            display.value = display.value.slice(0, -1);
            display.value += e.target.value;
            whichOperator = e.target.value;
            return;
          }
          case "/": {
            display.value = display.value.slice(0, -1);
            display.value += e.target.value;
            whichOperator = e.target.value;
            return;
          }
        }

        // return;
      }
      display.value += e.target.value;
      whichOperator = e.target.value;
    }
  })
);

function sizeCheck() {
  display.value = "size error";
  setTimeout(() => {
    clearEveryThing();
  }, 3000);
}
backBtn.addEventListener("click", function (e) {
  if (!display.value) return;
  if (/[+-/x]/g.test(display.value)) {
    operationBtnClickTime = 1;
  }
  display.value = display.value.slice(0, -1);
  calcData = display.value;

  console.log(calcData, "calcdata back btn");
});

clearBtn.addEventListener("click", clearEveryThing);
function clearEveryThing() {
  display.value = whichOperator = calcData = "";
  firstNum = secondNum = finalResult = 0;
  operationBtnClickTime = 1;
  return;
}
