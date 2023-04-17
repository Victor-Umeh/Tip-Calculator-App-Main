"use strict";

////////////////////////////SELECTOR ELEMENTS
const billInput = document.querySelector("#bill");
const numOfPeople = document.getElementById("people");
const tipPercentages = document.querySelectorAll(".tips");
const customTipPercentages = document.querySelector(".custom");
const resetBtn = document.querySelector(".reset");
const tipAmount = document.querySelector(".per__person");
const totalPerson = document.querySelector(".total__person");

resetBtn.setAttribute("disabled", true);
let tip = 0;

////////////////////////////EVENT HANDLERS
//---------Tip percentage
tipPercentages.forEach(function (e) {
  // tip = e.textContent;
  e.addEventListener("click", function (e) {
    e.preventDefault();
    const element = e.target;

    //Removes active class
    document.querySelector(".active")?.classList.remove("active");
    element.classList.add("active");
    const tip1 = Number(element.textContent.replace("%", ""));
    tip = tip1;
  });
});

//---------Bill input
billInput.addEventListener("input", (e) => {
  e.preventDefault();
  const value = Number(billInput.value);

  // Update the DOM-----------------
  /////Tip Per Person
  tipAmount.textContent =
    tipAmount.textContent.slice(0, 1) + (value * 10) / 100;

  //////Tip Total Person
  totalPerson.textContent =
    totalPerson.textContent.slice(0, 1) + (value * 3 * 10) / 100;

  //Deactivates reset btn if billinput is empty or
  // reverse if billinput contain a value
  billInput.value && billInput.value > 0
    ? resetBtn.classList.add("hover")
    : resetBtn.classList.remove("hover");
});

//Number of people
numOfPeople.addEventListener("input", (e) => {
  e.preventDefault();
  const errorMsg = document.querySelector(".people__error");
  const numPersons = Number(numOfPeople.value);

  //Input can't be zero
  if (numPersons < 1 && numOfPeople.value !== "") {
    numOfPeople.classList.add("error");
    errorMsg.textContent = "Can't be zero";
  } else {
    errorMsg.textContent = "";
    numOfPeople.classList.remove("error");
  }
});

let cTip = 0;
//----------------Custom tip percentage
customTipPercentages.addEventListener("input", (e) => {
  e.preventDefault();
  const value = Number(customTipPercentages.value);
  cTip = value;
  console.log(cTip);
});
console.log(cTip);
// Error check
// if (!numPersons && numPersons !== 0) {
//   numOfPeople.classList.add("error");
//   errorMsg.textContent = "Enter a number";
// }
//--------------------------------------------------------------------
// const errorMsg = document.querySelector(".bill__error");
// if (!value && value !== 0) {
//   errorMsg.textContent = "Enter a number";
//   billInput.classList.add("error");
// } else {
//   errorMsg.textContent = "";
//   billInput.classList.remove("error");

//   // Updating tip value

//   // per person = value * %
//   const per_person = (value * 5) / 100;

//   // total = value * people * %
//   const totalPersons = ((value * 5) / 100) * 3;

//   // Update the DOM-----------------
//   /////Tip Per Person
//   tipAmount.textContent =
//     tipAmount.textContent.slice(0, 1) + per_person.toFixed(2);

//   //////Tip Total Person
//   totalPerson.textContent =
//     totalPerson.textContent.slice(0, 1) + totalPersons.toFixed(2);

//   //Disables reset btn if billinput is empty or
//   // reverse if billinput contain a value
//   billInput.value
//     ? resetBtn.classList.add("hover")
//     : resetBtn.classList.remove("hover");
// }
////////////////////////////FUNCTIONS

// function tipCalc(bill, tip, people) {
//   return ((bill * tip) / 100) * people;
// }
