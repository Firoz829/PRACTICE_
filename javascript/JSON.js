let postURL = "https://jsonplaceholder.typicode.com/posts";
// let respone = fetch(postURL)
//   .then((response) => {
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json);
//   });

// let userdata;
// async function hello() {
//   let response = await fetch(postURL);
//   let json = response.json();
//   userdata = json;
//   console.log(userdata);
// }

// hello();

let image = document.querySelector("img");
let btn = document.querySelector("button");
// btn.addEventListener("click",()=>{
//     fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => {
//     return response.json();
//   })
//   .then((json) => {
//     image.src=json.message;
//   });
// })

// using XML

btn.addEventListener("click", () => {
  // XML we can not us without new
  const xhr = new XMLHttpRequest();
     console.log(xhr); // response aaya ye kaise pata chalega
  // isi liye ek or event use kare ge
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    // console.log(xhr.response);
    image.src = xhr.response.message;
    console.log(xhr);
  }); // xhr pura load hojaye ga us ke bad ye chale ga

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random"); // requist not sending.. we are setting the data and url
  xhr.send();// requist sending
});
// how to conver json string to object
// JSON.parse(xhr.response)/ if we want response in json formet we use xhr.responseType='json'//we dont neet to parse

