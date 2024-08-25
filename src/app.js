/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, "A", "J", "Q", "K"];
let symbols = ["♣", "♠", "♥", "♦"];

function genCard() {
  let number = numbers[Math.floor(Math.random() * numbers.length)];
  let symbol = symbols[Math.floor(Math.random() * symbols.length)];

  let symbolColor;
  if (symbol === "♥" || symbol === "♦") {
    symbolColor = "red";
  } else {
    symbolColor = "black";
  }

  document.getElementById(
    "top"
  ).innerHTML = `<span style="color: ${symbolColor};">${symbol}</span>`;
  document.getElementById("mid").innerHTML = number;
  document.getElementById(
    "bot"
  ).innerHTML = `<span style="color: ${symbolColor};">${symbol}</span>`;
}
window.onload = genCard;
