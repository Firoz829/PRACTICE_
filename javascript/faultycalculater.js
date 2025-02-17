let random1 = Math.random();
console.log(random1);

let a = prompt("enter first number");
let c = prompt("operation");
let b = prompt("enter second number");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};
if (random1 > 0.1) {
  //persome correct calculation
  console.log(`the result is ${a} ${c} ${b}`);
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  // perfome wrong calculation
  c = obj[c]; // change the operation
  console.log(`the result is ${a} ${c} ${b}`);
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
