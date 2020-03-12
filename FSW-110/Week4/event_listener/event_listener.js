var box = document.getElementById("box")
box.style.backgroundColor = "purple"

function changeBlue() {
    box.style.backgroundColor = "blue"
}
box.addEventListener("mouseover", changeBlue)

function changeRed() {
    box.style.backgroundColor = "red"
}
box.addEventListener("mousedown", changeRed)

function changeYellow() {
    box.style.backgroundColor = "yellow"
}
box.addEventListener("mouseup", changeYellow)

function changeGreen(){
    box.style.backgroundColor = "green"
}
box.addEventListener("dblclick", changeGreen)

function changeOrange() {
    document.body.style.backgroundColor = "orange"
}
document.body.addEventListener("wheel", changeOrange)

function keypress(e){
    if (event.which == "66"){
        box.style.backgroundColor = "blue"
    } else if (keyCode == "82") {
        style.backgroundColor = "red"
    } else if (keyCode == "89") {
        document.box.style.backgroundColor = "yellow"
    } else if (keyCode == "71") {
        box.style.backgroundColor = "green"
    } else if (keyCode == "79") {
        box.style.backgroundColor = "orange"
    }
}
document.getElementById("box").addEventListener("keypress", keypress(e))