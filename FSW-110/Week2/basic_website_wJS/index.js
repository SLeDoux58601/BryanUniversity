var newNav = document.createElement("navbar")
newNav.textContent = "Home" + " About" + " Contact Us"
var myNav = document.getElementById("my-Nav")
myNav.append(newNav)

var newh1 = document.createElement("h1")
newh1.textContent = "Week 2 Project 1"
var myH1 = document.getElementById("my-h1")
myH1.append(newh1)

var newp = document.createElement("p")
newp.textContent = "I am typing text to fill space, this space gives an idea of where you can apply text."
var myP = document.getElementById("my-p")
myP.append(newp)

var newul = document.createElement("li")
newul.textContent = "List item 1" 
var mylist = document.getElementById("my-list")
mylist.append(newul)

var newul = document.createElement("li")
newul.textContent = "List item 2" 
var mylist = document.getElementById("my-list")
mylist.append(newul)

var newul = document.createElement("li")
newul.textContent = "List item 3" 
var mylist = document.getElementById("my-list")
mylist.append(newul)

var newfooter = document.createElement("footer")
newfooter.textContent = "I hope you enjoyed the site!"
var myFooter = document.getElementById("my-footer")
myFooter.append(newfooter)