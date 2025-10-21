function add (numA, numB){
  return numA + numB;
}
function subtract(numA , numB){
  return numA - numB;
}
function multiply(numA, numB){
  return numA * numB;
}
function divide (numA,numB){
  return numA / numB;
}



function operate(operator, numA, numB){
  numA = Number(numA);
  numB = Number(numB);
  if (operator == "+"){
    return add(numA,numB);
  }
  else if (operator == "-"){
    return subtract(numA,numB);
  }
  else if (operator == "*"){
    return multiply(numA,numB);
  }
  else if (operator == "/"){
    return divide(numA,numB);
  }

}

const selectedNum = document.querySelector(".num");
const totalNums = document.querySelectorAll(".num");
const equationDiv = document.querySelector(".equationDiv");
const clearBtn = document.querySelector(".clearBtn");
const operator = document.querySelector(".op");
const allOperators = document.querySelectorAll(".op");
const equalsBtn = document.querySelector(".equalsBtn");
const resultDiv = document.querySelector(".resultDiv");
const calcDisplay = document.querySelector(".calcDisplay");
const deleteBtn = document.querySelector(".deleteBtn");

let currentNum = "";
let operaterUsed = "";
firstNum = "";
currentNum = "";
let result = "";

clearBtn.addEventListener("click", function(e){
  resultDiv.innerHTML = "";
  equationDiv.innerHTML ="";
  firstNum = "";
  currentNum = "";
  result = "";
  operaterUsed = "";
});

deleteBtn.addEventListener("click", function (e) {

});


equalsBtn.addEventListener("click", function(e){
  e.preventDefault();

  console.log(`ON EQULS FIRST NUM == ${firstNum}`);
  console.log(`ON EQULS CURRENT NUM == ${currentNum}`);
  console.log(`ON EQULS OPERATER USED == ${operaterUsed}`)
  result = operate(operaterUsed, firstNum, currentNum);
  console.log(`ON EQULS RESULTS USED == ${result}`)
  if (operaterUsed === "/" && currentNum == 0){
    result = "STOP RIGHT THERE DON'T DIVIDE BY 0";
  }
  else if (!Number.isInteger(result)){
    result = result.toFixed(2);
  }
  resultDiv.textContent = result;
  result = "Completed";

});

deleteBtn.addEventListener("click", function (e) {
  currentNum = currentNum.slice(0, -1);
  currentNum = Number(currentNum);
  console.log("DEL STRING: " + currentNum);
  equationDiv.textContent = currentNum;


});

totalNums.forEach( (selectedNum) =>{
  selectedNum.addEventListener("click", function (e) {
    e.preventDefault();
    if (result == "Completed"){
      resultDiv.innerHTML = "";
      equationDiv.innerHTML = "";
      firstNum = "";
      currentNum = "";
      result = "";
      operaterUsed = "";
    }
    console.log(currentNum);
    currentNum += selectedNum.textContent;
    equationDiv.textContent = firstNum + operaterUsed + currentNum;



    console.log(currentNum);

    // Resets val of current Num when clear button pressed
    clearBtn.addEventListener("click", function (e) {
      currentNum = "";
    });
  });
});


allOperators.forEach((operator) => {
  operator.addEventListener("click", function (e) {
    e.preventDefault();
    currentNum = Number(currentNum);
    if (operaterUsed != ""){
      result = operate(operaterUsed, firstNum, currentNum);
      operaterUsed = operator.textContent;
      console.log("UPON START OF EVAL RESULTS IS: " + result);
      firstNum = result;
      currentNum = "";
      equationDiv.textContent = result + operaterUsed;
      resultDiv.textContent = "";


    }

    else {
      operaterUsed = operator.textContent;
      equationDiv.textContent += operaterUsed;
      console.log(`Operated Used: ${operaterUsed}`);
      console.log("OPERATTOR EXECUTED");
      firstNum = Number(currentNum);
      console.log(`Stored first num: ${firstNum}`);
      currentNum = "";
    }

  });
});



