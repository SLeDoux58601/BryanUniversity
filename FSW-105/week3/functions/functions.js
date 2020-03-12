function sum(num1, num2){
    return num1 + num2
}
var result = sum(2, 7) 
console.log(result)


function largeNumber(a, b, c){
    if ((a >= b) && (a >= c)){
        return a;
    } else if ((b >= a ) && (b >= c)) {
        return b;
    } else {
        return c;
    }
}
console.log(largeNumber(144, 248, 863))

function evenOdd(a){
    if (a % 2 === 0){
        return "even";
    } else {
        return "odd";
    }
}
console.log(evenOdd(17))


var n = myString.length
function myString(n){
    var myString = "Hello Class";
    if (n < 20){
        return myString + " " + myString
    } else if (n > 20) {
        return firstHalf(myString)
    }
}
console.log(myString(n))