let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    alert("Clicked Add Row")
}
//Add a column
function addC() {
    // Gets table element from the DOM
    let currGrid = document.getElementById("grid");
    let addColumn = document.querySelectorAll("tr");
    let currNumOfRows = 0;
    if (numRows === 0){
        addR();
        currNumOfRows++;
    }

    for (let i = 0; i < numRows; i++){
        let box =  document.createElement("td");
        box.onclick = function(){
            this.style.backgroundColor = document.getElementById("selectedID").value;
        };
        addColumn[currNumOfRows].appendChild(box);
        currNumOfRows++;
    }
    numCols++;
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}