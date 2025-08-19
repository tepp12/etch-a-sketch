const container = document.querySelector("#container")

divAmount = 256
gridSize = Math.sqrt(divAmount)

for (let i = 0; divAmount > i; i++){
    let myDiv = document.createElement("div")
    myDiv.classList.add("square")
    container.appendChild(myDiv)
}