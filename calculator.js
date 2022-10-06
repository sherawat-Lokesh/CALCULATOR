const btnDigit = document.querySelectorAll(".button");
const mathBtn = document.querySelectorAll(".mathButtons");
const displayField = document.querySelector("#display");
const totalBtn = document.querySelector(".total-btn");

let HowManyTime = 1;
let a = "";
let b = "";
let calcData = "";
let whichOperator = "";
//prettier-ignore
btnDigit.forEach((btn) =>btn.addEventListener("click", function (e) {
  //prettier-ignore
  if (e.target.value === "C") {
            displayField.value = "" 
            a=''
            b=''
            calcData=''
            whichOperator=''
            }

  if (e.target.value !== "C" && e.target.value !== "=") {
    displayField.value += e.target.value;
    calcData += e.target.value;
  }
//   console.log(calcData);

  //prettier-ignore
  
        totalBtn.addEventListener("click", () => {
            // console.log('button clicked total')
            if (
              e.target.value === "+" ||
              e.target.value === "-" ||
              e.target.value === "x" ||
              e.target.value === "/"
            ) {
              whichOperator = e.target.value;
            //   console.log(whichOperator);
            }

          //prettier-ignore
          try{ 
    
         const values=   calcData.split(whichOperator)
           a= values[0]
           b=values[1]
         switch (a>=0 && b>=0) {

                case (whichOperator === "+"): {
                    displayField.value = (+a) + (+b);
                    break
                }
                case (whichOperator === "-"): {
                    displayField.value = a - b;
                    break
                }
                case (whichOperator === "x"): {
                    displayField.value = a *b;
                    break
                }
                case (whichOperator === "/"): {
                    displayField.value = (a / b).toFixed(2);
                    break
                            }
        } }catch(err){console.error(err)}
        });
})
    );

//prettier-ignore
