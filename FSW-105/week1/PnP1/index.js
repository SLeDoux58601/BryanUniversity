var shopper = {
    firstName: 'Bill',
    lastName: 'Jordan',
    delivery: true,
    currentItems: 13,
    listOfItemsToGet: ['milk', 'cheese', 'chicken', 'soup'],
    
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
} 
console.log(shopper)
