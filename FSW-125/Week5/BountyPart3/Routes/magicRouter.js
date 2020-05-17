const express = require('express')
const magicRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

const magic = [
    {
        name: "fireball",
        type: "fire",
        cost: "expensive"
    },
    {
        name: "frostbite",
        type: "ice",
        cost: "cheap"
    },
    {
        name: "lightningbolt",
        type: "electric",
        cost: "moderate"
    }
]

magicRouter.get('/', (req, res) => {
    res.send(magic)
})


module.exports = magicRouter