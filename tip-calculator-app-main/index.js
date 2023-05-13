"use strict";
////////////////////////////SELECTOR ELEMENTS
const billInput = document.querySelector("#bill"),
  numOfPeople = document.getElementById("people"),
  customTipPercentages = document.querySelector(".custom"),
  parentTipContainer = document.querySelector(".tips__control"),
  errorMsg = document.querySelector(".people__error"),
  resetBtn = document.querySelector(".reset");

let tipAmount = document.querySelector(".per__person");
let totalPerson = document.querySelector(".total__person");

let tip, people, clickedTip;
let customTip = [];
////////////////////////////EVENT HANDLERS

//---------Tip percentage
/* 
Tried forEach method but button value can't be read,
but amazingly propagating the event from the parent 
to the clicked node list seems to do the trick😁
*/
parentTipContainer.addEventListener("click", (e) => {
  e.preventDefault();
  customTip.push(e.target);
  const clickedEl = e.target;
  clickedTip = clickedEl;
  //Removes active class
  document.querySelector(".active")?.classList.remove("active");
  clickedEl.classList.add("active");
  tip = +clickedEl.textContent.replace("%", "");
  // console.log(tip);
});

//---------Bill input
billInput.addEventListener("input", (e) => {
  e.preventDefault();

  const value = +billInput.value;
  // Update the DOM-----------------

  //Tip percentage passed either from buttons or custom input field
  const calcTip = tip ? tip : customTip;
  /////Tip Per Person
  tipAmount.textContent =
    tipAmount.textContent.slice(0, 1) + (value * calcTip) / 100;

  //////Tip Total Person
  totalPerson.textContent =
    totalPerson.textContent.slice(0, 1) +
    (value * (people ? people : 1) * calcTip) / 100;

  //Deactivates reset btn if billinput is empty or
  // reverse if billinput contain a value
  billInput.value && billInput.value > 0 && isFinite(+tip)
    ? resetBtn.classList.add("hover")
    : resetBtn.classList.remove("hover");
});

//Number of people
numOfPeople.addEventListener("input", (e) => {
  e.preventDefault();
  const numPersons = +numOfPeople.value;

  //Input can't be zero
  if (numPersons < 1 && numOfPeople.value !== "") {
    numOfPeople.classList.add("error");
    errorMsg.textContent = "Can't be zero";
  } else {
    errorMsg.textContent = "";
    numOfPeople.classList.remove("error");
  }
  people = numPersons;
});

//----------------Custom tip percentage
customTipPercentages.addEventListener("input", (e) => {
  e.preventDefault();
  const value = +customTipPercentages.value;
  customTip = value;
});

//Reset
resetBtn.addEventListener("click", () => {
  customTip[0].classList.remove("active");
  billInput.value = "";
  numOfPeople.value = "";
  customTipPercentages.value = "";
  totalPerson.textContent = tipAmount.textContent = "$0.00";
});
//Clears input fields when page is reloaded
window.addEventListener("load", () => {
  customTipPercentages.value = "";
  billInput.value = "";
  numOfPeople.value = "";
});

//#--------An algorithm to sort out duplicates in an array

// const dup = ["dan", "gog", "lat", "gog", "jeg", "reg"];
// const findDup = (arr) => {
//   const sortedArray = arr.slice().sort();
//   const dups = [];
//   for (const [i, arr] of sortedArray.entries()) {
//     if (sortedArray[i + 1] == sortedArray[i]) {
//       dups.push(sortedArray[i]);
//     }
//   }
//   return dups.join();
// };

// console.log(findDup(dup));
