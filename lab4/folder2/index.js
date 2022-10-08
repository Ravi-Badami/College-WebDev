`use strict`;

const container = document.querySelector(".container");
container.setAttribute("class", "container");

const div1 = document.createElement("div");
div1.setAttribute("class", "div1");
console.log(typeof div1);
// div1.addEventListener("click", () => {
//   console.log("hello world");
// });

const textBox = document.createElement("input");
textBox.setAttribute("class", "inputBox");

container.appendChild(textBox);
container.appendChild(div1);

container.style.backgroundColor = "red";
container.style.width = 290 + "px";
container.style.height = 420 + "px";
container.style.borderRadius = 10 + "px";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = 100 + "vh";
let array = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "/", "*", "="];
[];
for (let i = 0; i < array.length; i++) {
  const textInDiv = document.createElement("p");
  textInDiv.setAttribute("class", "text-in-div");
  let ravi = document.createElement("button");
  // console.log(typeof ravi);
  ravi.style.border = "none";
  ravi.setAttribute("class", "inside-div");

  ravi.style.backgroundColor = "black";
  ravi.style.height = 40 + "px";
  ravi.style.borderRadius = "6px";
  ravi.style.width = 55 + "px";
  ravi.innerText = array[i];
  textInDiv.innerText = array[i];
  div1.appendChild(ravi);
  ravi.appendChild(textInDiv);
  ravi.addEventListener("click", () => {
    // console.log(array[i]);
    if (array[i] != "=") {
      textBox.value += array[i];
    } else {
      textBox.value = eval(textBox.value);
    }
  });

  // console.log(typeof textInDiv);
}

div1.addEventListener("click", () => {});
//calculator function
let ravib = document.createElement("button");
// console.log(typeof ravib);
console.log(array[3]);
