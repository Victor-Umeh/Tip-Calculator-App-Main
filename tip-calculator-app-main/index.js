"use strict";

////////////////////////////SELECTOR ELEMENTS
const billInput = document.querySelector("#bill");
const errorMsg = document.querySelector(".bill__error");
const numOfPeople = document.getElementById("people");
const tipPercentages = document.querySelectorAll(".tips");
const customTipPercentages = document.querySelector(".custom");
const resetBtn = document.querySelector(".reset");
const tipAmount = document.querySelector(".per__person");
const totalPerson = document.querySelector(".total__person");

let tip = 0;
resetBtn.disabled = true;

////////////////////////////EVENT HANDLERS
billInput.addEventListener("input", (e) => {
  e.preventDefault();
  const value = Number(billInput.value);

  // Error check
  if (!value && value !== 0) {
    errorMsg.textContent = "Enter a number";
    billInput.classList.add("error");
  } else {
    document.querySelector(".bill__error").textContent = "";
    billInput.classList.remove("error");

    // Updating tip value

    // per person = value * %
    const per_person = (value * 5) / 100;

    // total = value * people * %
    const totalPersons = ((value * 5) / 100) * 3;

    // Update the DOM-----------------
    /////Tip Per Person
    tipAmount.textContent =
      tipAmount.textContent.slice(0, 1) + per_person.toFixed(2);

    //////Tip Total Person
    totalPerson.textContent =
      totalPerson.textContent.slice(0, 1) + totalPersons.toFixed(2);
  }
});

tipPercentages.forEach((e) => {
  e.addEventListener("click", tipsFunc);
});

////////////////////////////FUNCTIONS

function tipsFunc(e) {
  const element = e.target;
  document.querySelector(".active")?.classList.remove("active"); //Removes active class
  element.classList.add("active");
  tip = Number(element.textContent.replace("%", ""));
}
console.log(tip);

// function tipCalc(bill, tip, people) {
//   return ((bill * tip) / 100) * people;
// }
