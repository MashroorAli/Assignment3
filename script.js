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
    // Gets table element from the DOM
    let currGrid = document.getElementById("grid");
    currGrid.deleteRow(numRows-1);
    numRows--;
    if (numRows < 1)
    {
        numCols = 0;
        numRows = 0;
    }
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
    // Gets grid from the DOM 
    document.querySelectorAll("td").forEach(td => {
        if (td.style.backgroundColor === "" || td.style.backgroundColor === "white")
        {
            // Gets currently selected color and sets all unfilled boxes to said color
            td.style.backgroundColor = document.getElementById("selectedID").value;
        }
    });
}