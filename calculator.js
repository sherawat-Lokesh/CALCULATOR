"use strict";

// prettier-ignore
import {display, mathBtn,clearBtn,logBtn,equalBtn,operationBtn,backBtn} from "./domSelect.js";

// prettier-ignore
let firstNum=0,secondNum=0, finalResult = 0,operationBtnClickTime = 1,whichOperator,calcData = "";
const calcLog = [];

logBtn.addEventListener("click", function (e) {
  let opened = window.open("");
  opened.document.write(
    ` <html><head><title>Calculations</title></head>
    <body>
    
        <p>${calcLog}</p><br>
    </body>
    </html>`
  );
});

mathBtn.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    if (display.value.length >= 15) {
      sizeCheck();
    }
    if (/[+-/x]/g.test(display.value)) {
      operationBtnClickTime--;
      console.log(operationBtnClickTime);
    }
    display.value += e.target.value;
  })
);

operationBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (operationBtnClickTime > 0) return;
    if (operationBtnClickTime <= 0) {
      forCalculationSolving();
    }
  });
});
//equal btn click solution
equalBtn.addEventListener("click", forCalculationSolving);

function forCalculationSolving() {
  calcData = display.value;
  console.log(calcData);
  const [firstNum, secondNum] = calcData.split(whichOperator);
  console.log(firstNum, secondNum);
  if (!firstNum && !secondNum) return;
  operationBtnClickTime = 1;
  switch (whichOperator) {
    case "x": {
      finalResult = firstNum * secondNum;
      display.value = finalResult;
      calcLog.push(display.value);
      return;
    }
    case "+": {
      finalResult = +firstNum + +secondNum;
      display.value = finalResult;
      calcLog.push(display.value);
      return;
    }
    case "-": {
      finalResult = firstNum - secondNum;
      display.value = finalResult;
      calcLog.push(display.value);
      return;
    }
    case "/": {
      finalResult = firstNum / secondNum;
      display.value = parseFloat(finalResult).toFixed(1);
      calcLog.push(display.value);
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
