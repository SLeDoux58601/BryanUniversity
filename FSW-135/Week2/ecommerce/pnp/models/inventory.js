const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        require: true
    },
    expirationDate: String
})

module.exports = mongoose.model("Inventory", inventorySchema)