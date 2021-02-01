// let curr = "24,782.84";
// let myAmount = 0.00036585;
// let numValue = parseInt(curr.replace(/[.,]/g,""));
// let percent = (myAmount/1) * 100;
// let value = (percent/100) * numValue / 100;
// let finalValue = Math.round(value * 100) / 100;

let calculate = document.getElementById("calculate");
let curr = document.getElementsByTagName("input")[0];
let myAmount = document.getElementsByTagName("input")[1];
let displayValue = document.getElementById("value");
let currency = document.getElementById("currency");
let numValue;
let percent;
let value;
let finalValue;

calculate.addEventListener("click",function(){
  if(displayValue.innerHTML !== ""){
  	reset();
  }	
  numValue = parseFloat(curr.value);	
  myAmount = parseFloat(myAmount.value);
  percent = (myAmount/1) * 100;
  value = (percent/100) * numValue / 100;
  finalValue = Math.round(value * 100) / 100;
  displayValue.innerHTML = `value: ${finalValue }`; 
 });


function reset(){
  calculate = document.getElementById("calculate");
  curr = document.getElementsByTagName("input")[0];
  myAmount = document.getElementsByTagName("input")[1];
  displayValue = document.getElementById("value");
  currency = document.getElementById("currency");
  numValue;
  percent;
  value;
  finalValue;
  displayValue.innerHTML = "";

}
