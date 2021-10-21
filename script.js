let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    // Gets table element from the DOM
    let currGrid = document.getElementById("grid");
    let addRow = document.createElement("tr");
    if (numRows === 0 && numCols === 0)
    {
        let box = document.createElement("td");
        box.onclick = function()
        {
            this.style.backgroundColor = document.getElementById("selectedID").value;
        };
        addRow.appendChild(box);
        numCols++;
    }
    else
    {
        for (let i = 0; i < numCols; i++)
        {
            let box = document.createElement("td");
            box.onclick = function()
            {
                this.style.backgroundColor = document.getElementById("selectedID").value;
            };
            addRow.appendChild(box);
        }
    }

    currGrid.appendChild(addRow);
    numRows++;
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
    let currNumOfRowsInGrid = document.querySelectorAll("tr");
    let currNumOfRows = 0;
    for (let i = 0; i < numRows; i++)
    {
        currNumOfRowsInGrid[currNumOfRows].removeChild(currNumOfRowsInGrid[currNumOfRows].lastChild);
        // amount of rows deleted
        currNumOfRows++;
    }
    numCols--;
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