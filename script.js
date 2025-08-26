const container = document.querySelector("#container");

//later change divAmount to a custom var
divAmount = 16*16;
gridSize = Math.sqrt(divAmount);

for (let i = 0; divAmount > i; i++){
    let myDiv = document.createElement("div")
    myDiv.classList.add("square")
    container.appendChild(myDiv)
};

const square = document.querySelectorAll(".square");

square.forEach(el => el.addEventListener("mouseenter", event =>
{
    event.target.style.backgroundColor = "white"
}
))