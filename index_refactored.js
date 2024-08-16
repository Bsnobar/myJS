function boxCheker() {

    txtBoxValue = getTextBoxValue("txtBox1");

    if (isEmptyValue(txtBoxValue)) {
        showMessage("empty");
    }

    if (isString(txtBoxValue)) {
        showMessage("string");
    }

    if (isNumber(txtBoxValue)) {
        showMessage("number");
    }

    //todo continue for special characters
}


function getTextBoxValue(textBoxName) {
    var textObject = document.getElementById(textBoxName);

    if (textObject !== 'undefined' &&  !== null) { return textObject.value; }
    return null;
}

function showMessage(value) {
    alert(value);
}

function isEmptyValue(value) {
    if (value.length === 0) {
        return true
    }

    return false;
}

function isString(value) {
 //todo check for strings
}

function isNumber(value) {
    if (isNaN(value) === false) {
        return true;
    }

    return false;
}

       
document.getElementById('divButton').addEventListener("click", function () {

    document.getElementById('divButton').innerHTML = "yellow";

    document.getElementById('mainDiv').style.backgroundColor = "yellow";

});
