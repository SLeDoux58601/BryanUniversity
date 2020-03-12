var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
var counts = {}

for (var i = 0; i < officeItems.length; i++) {
    var numberOf = officeItems[i];
    counts[numberOf] = counts[numberOf] ? counts[numberOf] + 1 : 1;
}
console.log(counts["computer"])
var people = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }, 
]

for(var i = 0; i < people.length; i++) {
    if(people[i].age >= 18) {
        console.log(people[i].name + " Is Old Enough" + ", please let her in")
    } else {
        console.log(people[i].name + " Is Not Old Enough" + ", please do not let him in")
    }
}

for(var i = 1; i <= 100; i++){
    if(i % 2 == 0) 
        console.log(i + ' even');
    else if(i % 2 !== 0) 
        console.log(i + ' odd');
}