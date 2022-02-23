/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let symbol = ["diamond", "heart", "spade", "leaf"];

let generateRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * number.length);
  return number[randomNumber];
};
let generateRandomSymbol = () => {
  let randomSymbol = Math.floor(Math.random() * symbol.length);
  return symbol[randomSymbol];
};

window.onload = () => {
  let num = document.querySelector(".number");
  num.innerHTML = generateRandomNumber();

  let sym = generateRandomSymbol();
  let symup = document.querySelectorAll(".symbol");
  symup[0].classList.add(sym);
  let symdown = document.querySelectorAll(".symbol");
  symdown[1].classList.add(sym);
};
