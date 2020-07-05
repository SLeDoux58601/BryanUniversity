const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    issue: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true 
    },
    issueSince: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
})

module.exports = mongoose.model("Issue", issueSchema)
