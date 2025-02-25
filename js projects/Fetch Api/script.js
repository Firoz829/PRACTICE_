const URL = "https://cat-fact.herokuapp.com/facts";
// let promise = fetch(URL);
// console.log(promise);

const factpara = document.querySelector("#facts");
const btn = document.querySelector("#btn");

//using async await
// const getFacts = async () => {
//   console.log("getting data....");
//   let response = await fetch(URL);
//   console.log(response); // not JSON formate
//   let data = await response.json(); // convert to json
//   //   console.log(data);
//   factpara.innerHTML = data[0].text;
// };

// btn.addEventListener("click", getFacts);

// using promise

function getFacts() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      factpara.innerText = data[1].text;
    });
}

btn.addEventListener("click", getFacts);
