"use strict";
let input = document.querySelector(".fact");
let output = document.querySelector(".submit");
document.querySelector(".submit").addEventListener("click", function () {
  const ravi = Number(document.querySelector(".fact").value);
  let display = document.querySelector(".fac");
  let fact = 1;

  for (let i = 1; i <= ravi; i++) {
    fact = i * fact;
  }
  console.log(fact);
  display.textContent = fact;
});
