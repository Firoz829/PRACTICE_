let istatus = document.querySelector("h5");
let btn = document.querySelector("#add");
let friend = 0;
// let removeFriend=document.querySelector("#remove")
btn.addEventListener("click", () => {
  if (friend == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    btn.innerHTML="Remove Friend"
    // console.log("hello")
    friend = 1;
  } else{
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
     btn.innerHTML="Add Friend"
    friend=0
  }
});

// removeFriend.addEventListener("click",()=>{
//     istatus.innerHTML="Stranger"
//     istatus.style.color="red"
// })
