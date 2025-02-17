// function getData(dataID, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataID);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// // this is callback hell
// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });
// // get(1,getData(2))// aaise anahi likh sakte

// promises
// let promise = new Promise((resolve, reject) => {
//   console.log("i am a promise ");
//   // resolve("successfull");
//   reject("some error");
// });

// what is promise
//promise is a object in js
// in that there is 3 states (pending , resolve(fullfield), reject)
//resolve and reject is a handler in promise and this are automatically created in js
// or kisi bhi promise ke ander resolve or reject hote hai
// hum us promise ko complitet kar sakte hai ya to error genrate kar ke ya resolve kar ke

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }
// its returns promise
// after 5 sec
// Promise {<fulfilled>: 'success'}
// [[Prototype]]
// :
// Promise
// [[PromiseState]]
// :
// "fulfilled"
// [[PromiseResult]]
// :
// "success"

//  3rd question

// let getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("network error");
//   });
// };

// let promise = getPromise();
// promise.then((e) => {
//   console.log("promise fulfilled", e);
// });

// promise.catch((e) => {
//   console.log("some error");
// });
//hamare pass 2 fun hote hai then and catch
// jis ke ander hum apna proper function pass karsakte hai
// wo tabhi execute honga jab hamara promise ya to fulfilld honga ya rejected
// or in ke ander parameter bhi hota hai ek me result hota hai ek me reject
// proper value access hoti hai ye do methods se

// promise chainning

// function asyncFun1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");
//     }, 3000);
//   });
// }

// function asyncFun2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success");
//     }, 3000);
//   });
// }
// console.log("fetching data1.....");
// let p1 = asyncFun1();
// p1.then((res) => {
//   console.log(res);

//   console.log("fetching data2");
//   let p2 = asyncFun2();
//   p2.then((res) => {
//     console.log(res);
//   });
// });

// async and await

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weatehr data");
//       resolve(200); // means success
//     }, 3000);
//   });
// }

// async function getWeatherData() {
//   await api();
//   await api();
// }

// getWeatherData();

// await wait kare ga output ka fir aage wale programme jaye ga
// await sirf async method me hi use honga isi liye methods bana ke ander call kiya dusre method ko

// get data function use kar ke dekhte hai

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 3000);
  });
}

// ab is ko call karneke liye async method banana padhe ga jis me await use kar sakte hai

async function geAlldata() {
  await getData(1);
  await getData(2); // ye wait kare ga 1 ka
  await getData(3); /// sab aaise h wait kare ge
  await getData(4);
}
