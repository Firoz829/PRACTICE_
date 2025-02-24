//number
const score = 400;
// console.log(score);

const balance = new Number(100);
console.log(balance); //[Number: 100]

// console.log(balance.toString().length); //3
console.log(balance.toFixed(1)); //100.0

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(1)); //1e+2
// console.log(otherNumber.toPrecision(2)); //1.e+2
// console.log(otherNumber.toPrecision(3)); //124
// console.log(otherNumber.toPrecision(4)); // 123.9

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN"));
//10,00,000 in indian statderds

//Math  M is cap

// console.log(Math);
// console.log(Math.abs(-4));  // 4
// console.log(Math.round(4.6)); // roundup 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // 0 ye 1 ye beach me koi bhi number denga
console.log(Math.random() * 10 + 1); // 1 aana hi chahiye ham se kam
console.log(Math.floor(Math.random() * 10) + 1); // floor value hi aaye gi

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10 se 20 ke beach me hi value aaye gi
