// let arr = [1, 2, 3, 4, 7];
//      index=0,1,2,3,4      length=5

// arr[0] = 455;
// console.log(arr);    //[ 1, 2, 3, 4, 7 ]
// console.log(arr.length);    //5

// console.log(arr[0]);    //1
// console.log(arr[2]);    //3
// console.log(arr[7]);    // undefined

// console.log(arr.toString());     //455,2,3,4,7   convert to string
// console.log(arr.join(" "));    //455 2 3 4 7 seprater ko edit kar denga
// console.log(arr.join(" and "));     //455 and 2 and 3 and 4 and 7

//pop()     remove the last element from the array and
// console.log(arr.pop());   // 7  ..returns the popped value and updates the original array
// console.log(arr);    //[ 455, 2, 3, 4 ]

// push() add a new element at the end of an array
// console.log(arr.push(55)); // 6 modify the original array and return the new lenght of an array
// console.log(arr); //[ 455, 2, 3, 4, 7, 55 ]

// shift() remove first element and return it
// console.log(arr.shift()); //455
// console.log(arr); //[ 2, 3, 4, 7 ]

//unshift add element to the beginning and return new array length
// console.log(ar.unshift(99)); //6
// console.log(ar); //[ 99, 1, 2, 3, 4, 7 ]

// slice() slice out a piece from an array and its create new array
// let numbers = [1, 2, 3, 4, 5];
// numbers.slice(1, 2); // index 1 se 2 tak element delet ho gaya
// console.log(numbers);  //[ 1, 4, 5 ]
// numbers.slice(1, 3)
// numbers.splice(1, 3, 222, 333); // ye add honga
// console.log(numbers);  // [ 1, 222, 333, 5 ]

// console.log(numbers.slice(2)); // 2 index se elements show kare ga delete nahi kare ga
// console.log(numbers);

// let a = [1, 2, 3, 4, 55, 66, 77];
// delete a[1];
// console.log(a); // [ 1, <1 empty item>, 3, 4, 55, 66, 77 ]

// for (let index = 0; index < a.length; index++) {
//   const element = a[index];
//   console.log(element);
// }

// a.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// for in loop
// for (const key in obj) {
//   if (Object.prototype.hasOwnProperty.call(obj, key)) {
//     const element = obj[key];
//     console.log(element);
//   }
// }
// 1
// 2
// 3

// for of loop only iterates array not object
// for (const element of a) {
//   console.log(element);
// }

// add element in second array
let arr = [2, 3, 7, 8, 9];

let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   newArr.push(element ** 2);
// }
// console.log(newArr);

// second method using map
// newArr = arr.map((e, index, array) => {
//   return e ** 2;
// });

// console.log(newArr);

// greater then 7
// const greaterThanSeven = (e) => {
//   if (e > 7) {
//     return true;
//   }
//   return false;
// };
// console.log(arr.filter(greaterThanSeven));  // 8 9

// sum
let arr2 = [1, 2, 3, 4, 5, 6];

const red = (a, b) => {
  return a + b;
};

console.log(arr2.reduce(red)); // 21 .. sum
