myTotal = 0;
myInput = "";
myCalc = "+";
myFlg   = 1;

function myValue(myData){
  myFlg = 0;
  myInput += myData;
  document.dentaku.display.value = myInput;
}

function myCalculate(myData){
  if (myFlg==0){
    myFlg = 1;
    myWork = myTotal + myCalc + myInput;
    myTotal = eval(myWork);
    myInput = "";
    document.dentaku.display.value = myTotal;
  }
  if (myData == "="){
    myCalc = "+";
  }else{
    myCalc = myData;
  }
}

function myC(){
  myTotal = 0;
  myCalc = "+";
  myInput = "";
  document.dentaku.display.value = myTotal;
}
