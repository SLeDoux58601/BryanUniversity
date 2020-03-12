//let array1 = ["banana", "apple", "orange", "watermelon"];
//let array2 = ["carrot", "tomato", "pepper", "lettuce"];
function myArray(array1, array2){
    array2.pop()
    array1.shift()
    let x = array1.indexOf("orange")
    let y = array2.length
    //console.log("fruit: ", array1 + ' ' + x)
    //console.log("vegetables: ", array2 + ' ' + y)
    let food = array1.concat(array2).reverse()
    //let foodSlice = foodString.splice(4, 2)
    let foodRemove = food.splice(2,2)
    console.log(y + ',' + food)
}
myArray(["banana", "apple", "orange", "watermelon"], ["carrot", "tomato", "pepper", "lettuce"])


/*var foodRemove = food.splice(4, 6)
console.log(foodRemove)
var foodBackwards = food.reverse()
console.log(foodBackwards)*/