const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
for (let select of dropdowns) {
  for (currCode in countryList) {
    //console.log(code, countryList[code]);

    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// targer basicaly jo hum ne kuch bhi chnage kiya to kaha per change aaya wo hum
//pass kar denge updateFlag ko
const updateFlag = (element) => {
  //   console.log(element);  kya chnage kiya wo option select honga
  let currcode = element.value;
  //   console.log(currcode);  USD
  // ab hum curruncy code se hum country code leke aaye ge jaise ke INR se IN

  let countryCode = countryList[currcode]; //IN

  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  // select ke perent ko select karna hai
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtval = amount.value;
  if (amtval === "" || amtval < 1) {
    amtval = 1;
    amount.value = "1";
  }

  // console.log(amtval); 100

  // console.log(fromCurr.value,toCurr.value);//  usd inr
  // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  // let response = await fetchJSON(URL);
  // console.log(response)
  // let data = await response.json();

 
});
