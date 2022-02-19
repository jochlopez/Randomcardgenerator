/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let symbol = ["♦", "♥", "♠", "♣"];

let generateRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * number.length);
  return number[randomNumber];
};
let generateRandomSymbol = () => {
  let randomSymbol = Math.floor(Math.random() * number.length);
  return number[randomSymbol];
};

window.onload = () => {
  document.querySelector(".symbol-up").classList.add(generateRandomSymbol());
  document.querySelector(".card").innerHTML = generateRandomNumber();

  //console.log("Hello");
};
