// "use strict";
// function hello() {
//   name = "firoz";
//   console.log(name);
// }

// hello();
// console.log(name);

// if we use "use strict" its given an error
// ReferenceError: name is not defined

// "use strict";
// console.log(this);

//"use strict"; // if i use strict its undefine output
function showThis() {
  console.log(this); // In browsers, this refers to "window"
}
showThis();
// if i run normally means non strict mode its return object
