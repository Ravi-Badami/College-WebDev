"use strict";
let a = 0;
let b = 1;
let c;
// console.log(b);
for (let i = 1; i < 10; i++) {
  console.log(b);
  c = a + b;
  a = b;
  b = c;
}
