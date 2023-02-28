"use strict";

//select the elements

const inputBox = document.getElementById("input-num");
const submitButton = document.getElementById("btn");
const outputBox = document.getElementById("output");

// select elements
const chanceEl = document.getElementById("chance");
const scoreEl = document.getElementById("score");
const errorMsg = document.getElementsByClassName("error-msg");
const newGame = document.getElementById("restart-btn");
console.log(newGame);

// global variable
let remainChance = 10;
let gotScore = 0;

// assignment
chanceEl.innerText = remainChance;
scoreEl.innerText = gotScore;

// create random number-using function
const createRandomNumber = function () {
  return Math.trunc(Math.random() * 10 + 1);
};
// store the function output value in the randomNumbetr variable
const randomNumber = createRandomNumber();

// branchings and listerine's

const listen = submitButton.addEventListener("click", function () {
  // store the user input value in variable name and then typecasting into NUMBER();
  const inputValue = Number(inputBox.value);
  if (inputValue && inputValue >= 0 && inputValue <= 10) {
    if (remainChance === 1) {
      newGame.style.display = "block";
      outputBox.textContent = "GAME OVER!";
      // submitButton.style.display = "block";
    } else {
      if (inputValue === randomNumber) {
        outputBox.textContent = "Great! You got it!..";
        gotScore = remainChance;
        scoreEl.innerText = gotScore;
        newGame.style.display = "block";
        let currentScore = gotScore;
        let currentChance = remainChance;
        if (currentScore <= currentChance) {
          gotScore = remainChance;
          scoreEl.innerText = gotScore;
        } else {
          scoreEl.innerText = currentScore;
        }
      } else if (inputValue > randomNumber) {
        outputBox.textContent = "Your number is too high";
        remainChance--;
        chanceEl.innerText = remainChance;
        inputBox.value = "";
      } else if (inputValue < randomNumber) {
        outputBox.textContent = "Your number too low ";
        remainChance--;
        chanceEl.innerText = remainChance;
        inputBox.value = "";
      }
    }
  } else {
    alert("Enter a number in the range");
  }
});

// Reset the game and Start NEW GAME so,add the "eventlistener"
const reStart = newGame.addEventListener("click", () => {
  remainChance = 10;
  chanceEl.innerText = remainChance;
  outputBox.textContent = "";
  inputBox.value = "";
  newGame.style.display = "none";
  randomNumber = createRandomNumber();
});
