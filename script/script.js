"use strict";

//select the elements

const inputBox = document.getElementById("input-num");
const submitButton = document.getElementById("btn");
const outputBox = document.getElementById("output");
// console.log(inputBox);
// console.log(submitButton);
// console.log(outputBox);

// create random number-using function
const createRandomNumber = function () {
  return Math.trunc(Math.random * 100 + 1);
};
createRandomNumber();
// branchings and listerine's

const listen = submitButton.addEventListener("click", function () {
  const inputValue = document.getElementById("input-num").value;
  console.log(inputValue);
  if (inputValue === createRandomNumber) {
    output.textContent("Great! You got it!..");
  } else if (inputValue > createRandomNumber) {
    output.textContent("your number is too high");
  } else if (inputValue < createRandomNumber) {
    output.textContent("Your number too low ");
  } else {
    output.textContent("Error");
  }
});
