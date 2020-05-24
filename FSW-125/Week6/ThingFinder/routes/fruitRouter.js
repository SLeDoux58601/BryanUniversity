const express = require('express')
const fruitRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

const fruits = [
    {
        name: 'Ambrosia',
        type: 'Apple',
        cost: '0.65',
        _id: uuidv4()
    },
    {
        name: 'Red Delicious',
        type: 'Apple',
        cost: '0.85',
        _id: uuidv4()
    },
    {
        name: 'Red Grape',
        type: 'Grape',
        cost: '0.30',
        _id: uuidv4()
    },
    {
        name: 'Green Grape',
        type: 'Grape',
        cost: '0.35',
        _id: uuidv4()
    }
]

fruitRouter.get('/', (req, res) => {
    res.send(fruits)
})

//Test route: localhost:9000/fruits/search/type?type=Apple
fruitRouter.get('/search/type', (req, res) => {
    const type = req.query.type
    const filteredFruit = fruits.filter(currentFruit => currentFruit.type === type)
    res.send(filteredFruit)

})


module.exports = fruitRouter