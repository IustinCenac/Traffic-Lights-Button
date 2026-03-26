const colors = ["yellow", "green", "red"]
let index = 0

function changeColor() {
    ++index;
    document.getElementById("changeColorButton").style.backgroundColor = colors[index]
}
    
setInterval(function() {
    changeColor()
}, 10000);
