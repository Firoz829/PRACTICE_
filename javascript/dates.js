// Dates

let myDate = new Date();
// console.log(myDate);    //2025-02-20T14:06:39.855Z
// console.log(myDate.toString());  //Thu Feb 20 2025 19:36:39 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());   //Thu Feb 20 2025
// console.log(myDate.toLocaleString());     //20/2/2025, 7:39:23 pm
// console.log(typeof myDate); //object

// create own date
// let myCreatedDate = new Date(2025, 0, 23); // 0 index se month and date start hota hai
// console.log(myCreatedDate);  //2025-01-22T18:30:00.000Z
// let myCreatedDate = new Date(2025, 1, 21, 5, 3);
// console.log(myCreatedDate); //2025-02-20T23:33:00.000Z
// let myCreatedDate = new Date("2025-02-20"); //14/1/2023, 5:30:00 am
let myCreatedDate = new Date("02-20-2025"); //20/2/2025, 12:00:00 am pehle month likhna padhe ga
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp); //mililsec me aaye ga 1740061240037
// console.log(myCreatedDate.getTime()); //1739989800000
// console.log(Math.floor(Date.now() / 1000));  //1740061328

let newDate = new Date();
// console.log(newDate);
console.log(newDate.getMonth() + 1); //2
console.log(newDate.getDay()); //4
// console.log(newDate.g);//nohot sare methods hai
