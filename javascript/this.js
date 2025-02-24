// function chai() {
//   let username = "hitesh";
//   console.log(this.username);
// }

// chai(); // undefined

// const chai = function () {
//   let username = "hitesh";
//   console.log(this.username);
// };

// chai(); // undefined

const chai1 = () => {
  let username = "hitesh";
  console.log(this);
};

chai1(); //in Node.js its return {} empty..Node
//in browser its return window global object
// if we use in arror funtion its return Inherits from surrounding scope
