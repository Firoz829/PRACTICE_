// console.log("hello my name is firoz");

let firoz = "FIROZ";

// console.log(firoz);
// console.log(firoz[0]);
// console.log(firoz[1]);
// console.log(firoz[firoz.length - 1]);
// console.log(firoz[10]); // undefined
// console.log(firoz.length); //5

// let real_name = "firoz";
let friend = "altamash";

// console.log("his name is " + real_name + " and his friend name is " + friend);
// console.log(`his name is ${real_name} and hsi friends name is ${friend}`); //template literals

console.log(firoz.toLowerCase());
console.log(firoz.toUpperCase());
console.log(firoz.length);
console.log(firoz.slice(1, 4)); // last index ko chor denga
// 1 included hai 4 included nahi hai
console.log(firoz.slice(1)); // 1 se leke saare charecters denga

console.log(firoz.replace("FI", "77")); // FIROZFI raha to ye sirf start ka kare ga replace last ka nahi
console.log(firoz.concat(friend)); //FIROZaltamash
console.log(firoz.concat(" ", friend, " parevz")); //FIROZ altamash parevz

console.log(firoz.charAt(0)); //F
console.log(firoz.charAt(11)); //" "empty
console.log(firoz.indexOf("I")); // 1
console.log(firoz.indexOf("w")); // -1 agar char nahi mila to -1 denga

console.log(firoz.startsWith("F")); // true
console.log(firoz.endsWith("F")); // ffalse
