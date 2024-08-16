
function boxCheker() {

    const txtBoxValue = getTextBoxValue("txtBox1");

    if (isEmptyValue(txtBoxValue)) {
        showMessage("empty", "");
    } else 
    if (isString(txtBoxValue)) {
        showMessage(txtBoxValue, "string");
    }
    else
    if (isNumber(txtBoxValue)) {
        showMessage(txtBoxValue, "number");
    }
    else 
    if (isSpecial(txtBoxValue)){
        showMessage(txtBoxValue, "special character");
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

function isString(value) {
    return typeof value === "string";
}

function isNumber(value) {
    return !isNaN(value) && value.trim() !== "";
}

function isSpecial(value) {
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
    return specialChar.test(value);
}

function randomColor() {
    const letter = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('divButton').addEventListener("click", function () {
    const newColor = randomColor();
    document.getElementById('mainDiv').style.backgroundColor = newColor;

});
