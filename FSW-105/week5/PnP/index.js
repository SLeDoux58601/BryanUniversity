const arr1 = [3, 6, 8, 2]

const result1 = arr1.filter(num => num > 5)
    
console.log(result1)

const result2 = arr1.filter(num => num % 2 === 0)

console.log(result2)

const arr2 = ["dog", "wolf", "by", "family", "eaten", "camping"]

const result3 = arr2.filter(word => word.length < 5)

console.log(result3)

const arr3 = [
    {name: "Angelina Jolie", member: true },
    {name: "Eric Jones", member: false },
    {name: "Paris Hilton", member: true },
    {name: "Kanye West", member: false },
    {name: "Bob Ziroll", member: true }
]

const peopleWhoBelongToTheIlluminati= arr3.filter(people => people.member === true)
console.log(peopleWhoBelongToTheIlluminati)

const arr4 = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kanye West", age: 16 },
    { name: "Bob Ziroll", age: 100 },
]

const ofAge = arr4.filter(oldEnough =>oldEnough.age >= 18)
console.log(ofAge)

const arr5 = [2, 5, 100]

const doubleNumbers = arr5.map(num => num * 2)
console.log(doubleNumbers)

const stringItUp = arr5.map(num => String(num))
console.log(stringItUp)

const arr6 = ["john", "jacob", "jingleheimer", "schmidt"]
const capitalizeNames = arr6.map(name => name.charAt(0).toUpperCase() + name.substr(1))
console.log(capitalizeNames)

const arr7 = [
    { name: "Angelina Jolie", age: 80},
    { name: "Eric Jones", age: 2},
    { name: "Paris Hilton", age: 5},
    { name: "Kanye West", age: 16},
    { name: "Bob Ziroll", age: 100}
]

const namesOnly = arr7.map(names => names.name)
console.log(namesOnly)

const makeStrings = arr7.map(function(oldEnough){
    if( oldEnough.age >= 18){
        return oldEnough.name + "can go to The Matrix"
    } else if(oldEnough.age < 18){
        return oldEnough.name + "is under age!!"
    }
})
console.log(makeStrings)

const readyToPutInTheDOM = arr7.map(person => "<h1>" + person.name + "</h1>" + "<h2>" + person.age + "<h2>")
console.log(readyToPutInTheDOM)

const arr8 = [1,2,3]

const total = arr8.reduce( (final, num) => final += num)
console.log(total)

var stringConcat = arr8.reduce( (prev, curr) => prev + '' + curr)
console.log(stringConcat)

const arr9 = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age: 55, voted: true},
    {name:'Tami' , age: 54, voted: true},
    {name:'Mary' , age: 31, voted: false},
    {name:'Becky' , age: 43, voted: false},
    {name:'Joey' , age: 41, voted: true},
    {name:'Jeff' , age: 30, voted: true},
    {name:'Zack' , age: 19, voted: false},
]

const voteCount = arr9.reduce(function(final, voter){
    if(voter.voted){
        final++
    } 
    return final
}, 0)
console.log(voteCount)

const wishList = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hack Sack", price: 5},
    { title: "Gold fidget spinner", price: 2000},
    { title: "A second Tesla Model S", price: 90000}
]

const shoppingSpree = wishList.reduce(function(acc, cost){
    return cost.title == "Tesla" ? acc : acc+ cost.price
}, 0)
console.log(shoppingSpree)

const arr10 = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]
const flatten = arr10.reduce((a, b) => a.concat(b))
console.log(flatten)

const voter = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 33, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age: 55, voted: true},
    {name:'Tami' , age: 54, voted: true},
    {name:'Mary' , age: 31, voted: false},
    {name:'Becky' , age: 43, voted: false},
    {name:'Joey' , age: 41, voted: true},
    {name:'Jeff' , age: 30, voted: true},
    {name:'Zack' , age: 19, voted: false},
]

const arr12 = [1, 3, 5, 2, 90, 20]

const leastToGreatest =arr12.sort((a, b) => a - b)
console.log(leastToGreatest)

const greatestToLeast = arr12.sort((a, b) => b - a)
console.log(greatestToLeast)

const arr13 = ["dog", "wolf", "by", "family", "eaten"]

const lengthSort = arr13.sort((a, b) => a.length - b.length)
console.log(lengthSort)

const alphabetically = arr13.sort()
console.log(alphabetically)

const age = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambasssador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 },
]

const byAge = age.sort((a, b) => a.age - b.age)

console.log(byAge)