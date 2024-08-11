function boxCheker() {
    var textObject = document.getElementById('txtBox1');
    var value = textObject.value;
    var length = value.length;


    if (length === 0) {
        alert("empty box, enter smthn");
    }
    else if (isNaN(value) === false) {
        alert("numbers");

    } else {
        alert("strings")
    }


}

document.getElementById('divButton').addEventListener("click", function () {
    document.getElementById('divButton').innerHTML = "yellow";
    document.getElementById('mainDiv').style.backgroundColor = "yellow";
});
