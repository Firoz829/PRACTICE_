let con = document.querySelector("#container");
let love = document.querySelector("i");

con.addEventListener("dblclick", () => {
  // console.log("hello")
  love.style.transform = "translate(-50%, -50%) scale(1)";
  love.style.opacity = 0.8;
  love.style.color="#F75D59"
  setTimeout(() => {
    love.style.opacity = 0;
  }, 1000);
  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2000);
});
