const container = document.querySelector("#container");

const btn = document.querySelector("button");

let numItems = 16;

function AddListeners(desiredClass){
    desiredClass.forEach(el => el.addEventListener("mouseover", event =>
    {
    if(event.buttons == 1 || event.buttons == 3){
        event.target.style.backgroundColor = "black"
    }
    }
));
    desiredClass.forEach(el => el.addEventListener("mousedown", event => {
        event.target.style.backgroundColor = "black"
        }
    ));
}

btn.addEventListener("click", event => {
    numItems = +window.prompt("GIMME THE NUMBER OF SQUARES PER GRID")

    if (typeof numItems != "number"){
        alert("NOT NUMBER PLEASE INPUT ANOTHER ONE")
        return
    }
    if (numItems > 100){
        alert("DO YOU WANT TO LAG YOUR PC? PLEASE INPUT ANOTHER ONE")
        return
    }

    if (Math.sign(numItems) === 1){
        generateGrid()
        square = document.querySelectorAll(".square")
        AddListeners(square)
        console.log("did it")

    } else{
        alert("ENTER POSITIVE NUMBER, DUDE")
    }
})

function generateGrid() {
  container.replaceChildren();
  
  for (let i = 1; i <= (numItems * numItems); i++) {
    const square = document.createElement("div");       
    square.classList.add("square")
    container.appendChild(square);
  }
  
  document.documentElement.style.setProperty("--number", numItems);
};

generateGrid();
let square = document.querySelectorAll(".square")
AddListeners(square)