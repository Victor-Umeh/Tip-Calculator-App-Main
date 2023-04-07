"use strict";
const billValue = document.querySelector("#bill");
const numOfPeople = document.getElementById("people");
const tipPercentages = document.querySelectorAll(".tips");
const customTipPercentages = document.querySelector(".custom");
const resetBtn = document.querySelector(".reset");
const tipAmount = document.querySelector(".per__person");
const totalPerson = document.querySelector(".total__person");

let tip = 0;
console.log(billValue.textContent);

tipPercentages.forEach((e, i) => {
  e.addEventListener("click", tipsFunc);
});

function tipsFunc(e) {
  document.querySelector(".active")?.classList.remove("active"); //Removes active class
  const element = e.target;
  tip = Number(element.textContent.replace("%", ""));
  element.classList.add("active");
  //   console.log(tip);
}
// if(billValue.textContent === )
