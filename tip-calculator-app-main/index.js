"use strict";

////////////////////////////SELECTOR ELEMENTS
const billInput = document.querySelector("#bill"),
  numOfPeople = document.getElementById("people"),
  tipPercentages = document.querySelectorAll(".tips"),
  customTipPercentages = document.querySelector(".custom"),
  resetBtn = document.querySelector(".reset"),
  tipAmount = document.querySelector(".per__person"),
  totalPerson = document.querySelector(".total__person"),
  parentTipContainer = document.querySelector(".tips__control"),
  errorMsg = document.querySelector(".people__error");

let tip, people, customTip, clickedTip;

////////////////////////////EVENT HANDLERS

// ---------Tip percentage
parentTipContainer.addEventListener("click", (e) => {
  e.preventDefault();
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

  // console.log(value);
  console.log(people);
  console.log(tip);
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
  billInput.value = "";
  numOfPeople.value = "";
  customTipPercentages.value = "";
});
//Clears input fields when page is reloaded
window.addEventListener("load", () => {
  customTipPercentages.value = "";
  billInput.value = "";
  numOfPeople.value = "";
});
