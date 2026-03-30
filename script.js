const colors = ["yellow", "green", "red"]
let index = -1

function changeColor() {
    ++index;
    document.getElementById("changeColorButton").style.backgroundColor = colors[index % 3]
}
    
setInterval(function() {
    changeColor()
}, 10000);
