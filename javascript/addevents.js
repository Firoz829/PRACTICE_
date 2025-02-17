let button = document.getElementById("btn");

button.addEventListener("click", () => {
  document.querySelector(".container").innerHTML =
    "<b>Hello I Am FIROZ</b> and i clicked the button";
});

button.addEventListener("contextmenu", () => {
  alert("Don't use right click");
});

button.addEventListener("keydown", (e) => {
  console.log(e.key +" "e.keyCode);
});
