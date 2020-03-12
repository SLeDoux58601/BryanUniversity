var newh1 = document.createElement("h1")
newh1.textContent = "Welcome to my JS site"
var myH1 = document.getElementById("my-h1")
myH1.append(newh1)

var newp = document.createElement("p")
newp.textContent = "All of this was created with Javascript"
var myP = document.getElementById("my-p")
myP.append(newp)

var newLi = document.createElement("li")
newLi.textContent = "one"
var list = document.getElementById("list")
list.append(newLi)

var newLi = document.createElement("li")
newLi.textContent = "two"
var list = document.getElementById("list")
list.append(newLi)

var newLi = document.createElement("li")
newLi.textContent = "three"
var list = document.getElementById("list")
list.append(newLi)