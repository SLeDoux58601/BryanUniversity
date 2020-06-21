const mongoose = require('mongoose')
const schema = mongoose.schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    vote: Number
})

module.exports = mongoose.model('Issue', issueSchema)