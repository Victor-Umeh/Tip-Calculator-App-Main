"use strict";
const billValue = document.getElementById("bill");
const numOfPeople = document.getElementById("people");
const tipPercentages = document.querySelectorAll(".tips");
const customTipPercentages = document.querySelector(".custom");
const resetBtn = document.querySelector(".reset");
const tipAmount = document.querySelector(".per__person");
const totalPerson = document.querySelector(".total__person");

let tip = 0;

tipPercentages.forEach((e, i) => {
  e.addEventListener("click", tipsFunc);
});

function tipsFunc(e) {
  const element = e.target;
  tip = Number(element.textContent.replace("%", ""));
  console.log(tip);
}

// if (element.classList.contains("active")) {
//     element.classList.remove("active");
//     if (!element.classList.contains("active")) {
//       !element && element.classList.remove("active");
//     }
//   } else {
//     element.classList.add("active");
//   }
//   console.log(!element);
