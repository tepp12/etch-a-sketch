const container = document.querySelector("#container");

const btn = document.querySelector("button");

let divSize

function InsertTiles(x){
    for (let i = 0; x > i; i++){
    let myDiv = document.createElement("div")
    myDiv.classList.add("square")
    container.appendChild(myDiv)
};
};

function DeleteTiles(desiredClass){
    desiredClass.each(function(element){
        element.remove()
    })
}

function AddListeners(desiredClass){
    desiredClass.forEach(el => el.addEventListener("mouseover", event =>
    {
    if(event.buttons == 1 || event.buttons == 3){
        event.target.style.backgroundColor = "white"
    }
    }
));
    desiredClass.forEach(el => el.addEventListener("mousedown", event => {
        event.target.style.backgroundColor = "white"
        }
    ));
}

btn.addEventListener("click", event => {
    let gridTile = +window.prompt("GIMME THE NUMBER OF SQUARES PER GRID")
    let divAmount = gridTile*gridTile;
    
    // add check to see if there's any children inside container, then delete
    //DeleteTiles(square)

    if (typeof gridTile != "number"){
        alert("NOT NUMBER PLEASE INPUT ANOTHER ONE")
        return
    }
    if (gridTile > 100){
        alert("DO YOU WANT TO LAG YOUR PC? PLEASE INPUT ANOTHER ONE")
        return
    }

    if (Math.sign(gridTile) === 1){
        InsertTiles(divAmount)
        let square = document.querySelectorAll(".square")
        AddListeners(square)

    } else{
        alert("ENTER POSITIVE NUMBER, DUDE")
    }
})