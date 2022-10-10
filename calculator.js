"use strict";

// prettier-ignore
import { valueBtn, calcBtn, totalBtn, clearBtn, display,buttons } from "./domSelect.js";
// prettier-ignore
display.value=230
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

