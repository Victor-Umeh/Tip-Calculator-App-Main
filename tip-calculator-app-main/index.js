"use strict";
const billValue = document.getElementById("bill");
const numOfPeople = document.getElementById("people");
const tipPercentages = document.querySelectorAll(".tips");
const customTipPercentages = document.querySelector(".custom");
const resetBtn = document.querySelector(".reset");
const tipAmount = document.querySelector(".per__person");
const totalPerson = document.querySelector(".total__person");

tipPercentages.forEach((e) => {
  e.addEventListener("click", tipsFunc);
});

let tip;
function tipsFunc(e) {
  tip = e.target.textContent;
  e.target.classList.add("active");
  console.log(tip);
}
