const readline = require('readline-sync')
const name = readline.question("What is your name? ");
var hasKey = false

function theList(num){
    console.log("1. Put hand in Hole")
    console.log("2. Find the Key")
    console.log("3. Open the Door")
    var number = readline.questionInt("Enter Number: ")
    return number
}
console.log("Hi, " + name + "   you find yourself in a locked room. There is a door and a hole in the wall. What will you do?")
displayList()

function displayList(){
    console.log("   ")
    var choice = theList(choice)
    if (choice === 1){
        console.log("   ")
        console.log(name + "You've put your hand in a hole, your hand is now stuck in a bear trap.")
        console.log("GAME OVER!!")
    }else if (choice === 2 && hasKey === false){
        console.log("   ")
        console.log(name + " you search for key and find it.")
        hasKey = true;
       
        displayList()
    }else if (choice === 2 && hasKey === true){
        console.log("   ")
        console.log( name + " you already have a key")
        
        displayList()
    }else if (choice === 3 && hasKey === false){
        console.log("   ")
        console.log(name + " You try to open the door but it is LOCKED")
        
        displayList()
    }else if (choice === 3 && hasKey === true){
        console.log("   ")
        console.log ("Congratz " + name + " you have Escaped The Room!!")
        console.log("Thanks for playing!!!")
    }else{
        console.log("   ")
        console.log("SORRY " + name + " That is not a valid number. TRY AGAIN!!")
        displayList()
        
    }
}
