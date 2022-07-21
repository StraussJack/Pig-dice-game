"use strict";
const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const current0Element = document.querySelector("#current--0");
const current1Element = document.querySelector("#current--1");

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");
let totalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//бросок кубика

btnRoll.addEventListener("click", function () {
  const diceNimber = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove("hidden");
  diceElement.src = `dice${diceNimber}.png`;

  if (diceNimber !== 1) {
    currentScore += diceNimber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle("player--active");
    player1Element.classList.toggle("player--active");
  }
});
