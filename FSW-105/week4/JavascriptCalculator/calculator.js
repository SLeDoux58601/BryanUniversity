const readlineSync = require("readline-sync");
const input = readlineSync.question("Are you ready to calculate?");
console.log(input);
function addingTwo() {
    const num1 = Number(readlineSync.question('What is the first number you will be adding? '));
    const num2 = Number(readlineSync.question('What is the second number you will be adding to the first? '));
     console.log(num1 + num2)
}
function multiplyingTwo() {
    const num1 = Number(readlineSync.question('What is the first number you want to multiply? '));
    const num2 = Number(readlineSync.question('What is the second number you want to multiply to the first? '));
    console.log(num1 * num2)
}
function dividingTwo() {
    const num1 = Number(readlineSync.question('What is the first number you wish to divide? '));
    const num2 = Number(readlineSync.question('What is the second number you wish to divide the first by? '));
    console.log(num1 / num2)
}
function subtractingTwo() {
    const num1 = Number(readlineSync.question('What is the first number you would like to subtract from? '));
    const num2 = Number(readlineSync.question('What is the second number you would like to subtract from the first? '));
    console.log(num1 - num2)
}
function calculator() {
    function operationChoice() {
        const operation = readlineSync.question("What operations would you like to carry on with? \n Note: all are lowercased: ")
            operation == "add" || operation == "addition" ? addingTwo() :
            operation == "multiply" || operation == "multiplication" ? multiplyingTwo() :
            operation == "divide" || operation == "division" ? dividingTwo() :
            operation == "subtract" || operation == "subtraction" ? subtractingTwo() :
            console.log("Please try again with: 'add' 'multiply' 'divide' or 'substract' :) ")
    }
    operationChoice();
    const goodByeMessage = "Goodbye.";
    function doneOrNot() {
        const doneOrNot = readlineSync.question("Would you like to make more calculations? HINT: 'yes' or 'no': ")
              doneOrNot == "yes" ? calculator() :
              doneOrNot == "no" ? console.log(goodByeMessage) :
            "Please try again: yes or no."
    }
    doneOrNot();
}
calculator();
    
    
  
  

