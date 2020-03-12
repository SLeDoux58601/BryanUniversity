
var hello = document.createElement("h1");
hello.innerHTML = "Hello World";
document.body.appendChild(hello);


var names = ["Emily","Joe","Larry", "Nate", "Rick", "Shirley", "Steph", "Steve"];
var namesList = names.length;
for (i = 0; i < 8; i++) {
   var namesList = document.createElement("h1")
   namesList.innerHTML = names[i]
   document.body.appendChild(namesList);
   namesList.style.textAlign = "center"
   namesList.style.color = "Orange"
}


hello.style.textAlign = "center";  
document.body.style.backgroundColor = "lightblue"
