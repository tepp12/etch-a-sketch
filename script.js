const container = document.querySelector("#container");

const btn = document.querySelector("button");

let numItems = 16;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

function AddListeners(desiredClass){
    desiredClass.forEach(el => el.addEventListener("mouseover", event => {   
    if(event.buttons == 1 || event.buttons == 3){
        if (event.target.classList.contains("colored")){
                bgcolor = event.target.style.backgroundColor
                let rgbValues = bgcolor.match(/\d+/g); // Extracts all numbers from the string
                let r = parseInt(rgbValues[0]);
                let g = parseInt(rgbValues[1]);
                let b = parseInt(rgbValues[2]);

                event.target.style.backgroundColor = `rgb(${r * 0.9}, ${g * 0.9}, ${b * 0.9})`
        } else {
                let randomColor = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`
                event.target.style.backgroundColor = randomColor
                console.log(event.target.style.backgroundColor)
                event.target.classList.add("colored")
        }
    }
    }
));
    desiredClass.forEach(el => el.addEventListener("mousedown", event => {
            if (event.target.classList.contains("colored")){
                bgcolor = event.target.style.backgroundColor
                let rgbValues = bgcolor.match(/\d+/g); // Extracts all numbers from the string
                let r = parseInt(rgbValues[0]);
                let g = parseInt(rgbValues[1]);
                let b = parseInt(rgbValues[2]);

                event.target.style.backgroundColor = `rgb(${r * 0.9}, ${g * 0.9}, ${b * 0.9})`
        } else {
                let randomColor = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`
                event.target.style.backgroundColor = randomColor
                console.log(event.target.style.backgroundColor)
                event.target.classList.add("colored")
        }
        }
    ));
}

btn.addEventListener("click", event => {
    numItems = +window.prompt("ME DE O NÚMERO DE QUADRADOS")

    if (typeof numItems != "number"){
        alert("NÃO É UM NÚMERO POR FAVOR COLOQUE OUTRO")
        return
    }
    if (numItems > 100){
        alert("QUER LAGAR O SEU PC? ESCOLHA UM NÚMERO MENOR")
        return
    }

    if (Math.sign(numItems) === 1){
        generateGrid()
        square = document.querySelectorAll(".square")
        AddListeners(square)

    } else{
        alert("ESCOLHA UM NÚMERO VÁLIDO CARA")
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