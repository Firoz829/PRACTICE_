let div = document.createElement("div");
div.innerHTML = "hello my name is <b>Firoz</b>";

div.setAttribute("class", "created");
// document.querySelector(".container").append(div);//last me store honga
//document.querySelector(".container").before(div); // pehle honga
// prepand karunuga to parent ke bad kare ge yani .conrainer ke bad
//document.querySelector(".container").prepend(div);
document.querySelector(".container").after(div);
// karunuga to .container ke bahar kare ga
