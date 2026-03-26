const colors = ["yellow", "green", "red"]
let index = 0

function changeColor() {
    document.getElementById("changeColorButton").style.backgroundColor = colors[index]
    ++index;
    if (index > 2) {
        index = 0
    }
}
    
setInterval(function() {
    changeColor()
}, 10000);