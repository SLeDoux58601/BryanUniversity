if (5 > 3){
    console.log("is greater than")
}

let cat = 3

if (cat === 3){
    console.log("is the length")
} 

if ('cat' === 'dog'){
    console.log("the same")
} else {console.log("not the same")}

var person = {
  name: "Bobby",
  age: 12
}

if (person.age >= 18){
  console.log("Allowed in")
} else {
  console.log("not Allowed in")
}
var firstChar = person.charAt(0)
if (firstChar = "B"){
  console.log("Allowed in")
}

if (person.age >= 18 && (person.name = "B")){
  console.log("They are allowed in")
} else {
  console.log("They are not allowed in")
}

if (1 ==="1"){
    console.log("strict")
} else {
    console.log("abstract")
}

if (1 <= 2 && 2 > 4){
    console.log("yes")
} else {
  console.log("No")
}

var stringValue = "dog"
var booleanValue = "true"

console.log(stringValue, typeof (booleanValue) )

if (typeof booleanValue === "boolean"){
  console.log("Is a boolean")
} else {
  console.log("Is not a boolean")
}

let s = 13
let t = 15
let z = 20

if (s > 12){
  console.log("it is greater")
}

if ((s + t * z) > 20 - 2 * 6){
  console.log("The Letter's Win")
} else {
  console.log("The Number's Win")
}
