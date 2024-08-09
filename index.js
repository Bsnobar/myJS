function boxCheker() {
    var textObject = document.getElementById('txtBox1');
    var value = textObject.value;
    var length = value.length;

    if (length === 0) {
        alert("empty box, enter smthn");
    } else {
        alert("thank you");
    }
}