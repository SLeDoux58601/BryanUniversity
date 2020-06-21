const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')

//Get All
inventoryRouter.get('/', (req, res, next) => {
    Inventory.find((err, inventoryItems) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventoryItems)
    })
})


//Get One
inventoryRouter.get("/:inventoryId", (req, res, next) => {
    Inventory.find({ _id: req.params.inventoryId }, (err, inventoryItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventoryItem)
    })
})


//Post One
inventoryRouter.post("/", (req, res, next) => {
    const newItem = new Inventory(req.body)
    newItem.save((err, savedItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

//Update One
inventoryRouter.put("/:inventoryId", (req, res, next) => {
    Inventory.findByIdAndUpdate(
        {_id: req.params.inventoryId},
        req.body,
        {new: true},
        (err, updatedInventory) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedInventory)
        }
    )
})

//Delete One
inventoryRouter.delete("/:inventoryId", (req, res, next) => {
    Inventory.findByIdAndDelete({ _id: req.params.inventoryId}, (err, deletedItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Item ${deletedItem.name} successfully removed from database`)
    })
})


module.exports = inventoryRouter