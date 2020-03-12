function newItem() {
    let item = document.getElementById("input").value;
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("- " + item));
    ul.appendChild(li);
    document.getElementById("input").value = "";
    li.onclick = removeItem
}

document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
        newItem();
    }
}

function removeItem(e) {
    e.target.parentElement.removeChild(e.target);
}