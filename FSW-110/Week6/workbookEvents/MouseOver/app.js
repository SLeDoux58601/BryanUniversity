mouseCoords = (mouseEvent) => {
    var xpos;
    var ypos;
    if (mouseEvent){
        xpos = window.event.screenX;
        ypos = window.event.screenY
    }
    document.getElementById("redbox").innerHTML = xpos + ", " + ypos;
}
document.getElementById("redbox").onmousemove = mouseCoords