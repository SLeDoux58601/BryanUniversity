// make the box disapear when the user clicks it

const box = document.getElementById("box")

const disappearBox = () => {
    box.remove()
}
box.addEventListener("click", disappearBox)