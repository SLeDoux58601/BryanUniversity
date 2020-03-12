/*function firstButton (){
    alert("You have clicked the first button!");
}
function secondButton (){
    alert("Yay, I'm glad you clicked me!");
}
function thirdButton (){
    alert("I knew you would click me!");
}*/



document.forms.addEventListener("submit", function(e){
    e.preventDefault()

    let firstName = document.forms.firstName.value
    let secondName = document.forms.secondName.value
    let age = document.forms.age.value
    let person = firstName + " " + secondName + " Age:" + age;
    // submiting before getting to clean up code on right around here needed to be looked at more. 
    alert(firstName + " " + secondName + " Age: " + age);
    document.getElementsByName("forms").reset()
})

function resetform() {
    document.getElementsById("myForm").reset("myForm")
}