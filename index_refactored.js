//datatype validation+alert 
function boxCheker() {

    const txtBoxValue = getTextBoxValue("txtBox1");

    if (isEmptyValue(txtBoxValue)) {
        showMessage("empty", "");
    }
    else
        if (isEmail(txtBoxValue)) {
            showMessage(txtBoxValue, "email");
        }
        else
            if (isSpecial(txtBoxValue)) {
                showMessage(txtBoxValue, "special character");
            }
            else
                if (isString(txtBoxValue)) {
                    showMessage(txtBoxValue, "string");
                } else
                    if (isNumber(txtBoxValue)) {
                        showMessage(txtBoxValue, "number");
                    }

                    else {
                        showMessage(txtBoxValue, "invalid");
                    }

}
function getTextBoxValue(textBoxName) {
    const textObject = document.getElementById(textBoxName);

    if (textObject !== undefined && textObject !== null) { return textObject.value; }
    return null;
}

function showMessage(value, type) {
    alert("value: " + value + "\ntype: " + type);
}

function isEmptyValue(value) {
    return value.trim().length === 0;
}

function isNumber(value) {
    return !isNaN(value) && value.trim() !== "";
}

function isSpecial(value) {
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
    return specialChar.test(value);
}

function isEmail(value) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
}

function isString(value) {
    return typeof value === "string";
}

//random color button
function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

document.getElementById('divButton').addEventListener("click", function () {
    const newColor = randomColor();
    document.getElementById('mainDiv').style.backgroundColor = newColor;

});

//table, data list
const jsonString = 
  `[{ "name": "basem", "age": 41, "position":"lead se" },
    { "name": "ahmad", "age": 22, "position":" se" },
    { "name": "batool", "age": 21, "position":"lead" },
    { "name": "dana", "age": 34,"position":"lea" }]`

const data = parseJSON(jsonString);
buildTable(data);

function buildTable(jsonS){
    const rows = generateRows(jsonS);
    insertRows(rows); 

}
function parseJSON(jsonS){
    return JSON.parse(jsonS);
}
function generateRows(data){
    let rows = ''
    for (var i=0; i<data.length; i++){
        rows += `<tr>
                    <td>${data[i].name}</td>
                    <td>${data[i].age}</td>
                    <td>${data[i].position}</td>
                </tr>
               `;
    }
return rows;
}
function insertRows(rows){
document.getElementById("employee-tbody").innerHTML = rows;
}

//timed div button
let isChangingColor = false;
let timeoutID;

document.getElementById("divTimedButton").addEventListener("click", function(){
   if (!isChangingColor) {
    this.textContent= "Stop Div Color Change";
    isChangingColor= true;
    changeColor();
    
} else { 
    this.textContent = "Start Div Color Change";
    isChangingColor = false;
    clearTimeout(timeoutID);
}
});
function changeColor(){
    if(isChangingColor){
       const newColor = randomColor();
       document.getElementById("timedDiv").style.background= newColor;
       timeoutID = setTimeout(changeColor, 1000);
    }
}
