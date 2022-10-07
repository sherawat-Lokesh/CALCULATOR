"use strict";

// prettier-ignore
import { valueBtn, calcBtn, totalBtn, clearBtn, display,buttons } from "./domSelect.js";
// prettier-ignore
let firstNum = 0, secondNum = 0,  finalResult=0, howManyTime = 1,whichOperator,calcData = "";

buttons.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    // prettier-ignore
    if(e.target.value !== "C" && e.target.value !== "=" ) {
     
        display.value += e.target.value;
            calcData += e.target.value
            if(display.value.length>15){
              display.value=` Size Error`
             setTimeout(() => {
               empetyEverthing();
             }, 3000);
            }
             
    }
    clearBtn.addEventListener("click", empetyEverthing);

    // prettier-ignore

    if(e.target.value==='+'||e.target.value==='-'||e.target.value==='x'||e.target.value==='/'){
       
         whichOperator = e.target.value;
         console.log(whichOperator, "line 26");
       
  }
  })
);

//it will work when howManyTime variable becomes zero(0)
totalBtn.addEventListener("click", function () {
  if (howManyTime > 0) return;
  try {
    console.log(calcData);
    const data = calcData.split(whichOperator);

    firstNum = +finalResult;
    secondNum = +data[1];
    console.log(firstNum, secondNum);

    switch (whichOperator) {
      case "+": {
        finalResult = firstNum + secondNum;
        display.value = finalResult;
        console.log(finalResult);
        break;
      }
      case "-": {
        finalResult = firstNum - secondNum;
        display.value = finalResult;
        console.log(finalResult);
        break;
      }
      case "x": {
        finalResult = firstNum * secondNum;
        display.value = finalResult;
        console.log(finalResult);
        break;
      }
      case "/": {
        finalResult = firstNum / secondNum;
        display.value = finalResult.toFixed(1);
        console.log(finalResult);
        break;
      }
    }
    howManyTime--;
    calcData = "";
  } catch (err) {
    console.error(err);
  }
});

totalBtn.addEventListener("click", function (e) {
  if (howManyTime > 0) {
    if (!display.value) return;
    try {
      console.log(calcData);
      const data = calcData.split(whichOperator);
      firstNum = +data[0];
      secondNum = +data[1];
      console.log(firstNum, secondNum);

      switch (whichOperator) {
        case "+": {
          finalResult = firstNum + secondNum;
          display.value = finalResult;
          console.log(finalResult);
          break;
        }
        case "-": {
          finalResult = firstNum - secondNum;
          display.value = finalResult;
          console.log(finalResult);
          break;
        }
        case "x": {
          finalResult = firstNum * secondNum;
          display.value = finalResult;
          console.log(finalResult);
          break;
        }
        case "/": {
          finalResult = firstNum / secondNum;
          display.value = finalResult.toFixed(1);
          console.log(finalResult);
          break;
        }
      }
      howManyTime--;
      calcData = "";
    } catch (err) {
      console.error(err);
    }
  }
});

function empetyEverthing() {
  display.value = "";
  firstNum = 0;
  secondNum = 0;
  finalResult = 0;
  howManyTime = 1;
  calcData = "";
  console.log(firstNum, secondNum, finalResult, howManyTime, calcData);
}
