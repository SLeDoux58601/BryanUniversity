const express = require('express')
const issuesRouter = express.Router()
const Issues = require('../models/issue.js')

issuesRouter.get("/", (req, res, next) => {
    Issues.find((err, issues) => {
        if(err) {
            res.state(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

issuesRouter.get("/user", (req, res, next) => {
    Issues.find({ user: req.user._id }, (err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

issuesRouter.get("/:issuesId", (req, res, next) => {
    Issues.findOne({_id: req.params.issuesId}, (err, votes) => {
        if(err){
            res.status(500) 
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

issuesRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newIssues = new Issues(req.body)
    newIssues.save((err, savedIssues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssues)
    })
})

issuesRouter.delete("/:issuesId", (req, res, next) => {
    Issues.findOneAndDelete(
        {_id: req.params.issuesId, user: req.user._id}, 
        (err, deletedItem) => {
        if(err){
            res.status(500) 
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`) 
    })
})

issuesRouter.put("/:issuesId", (req, res, next) => {
    Issues.findOneAndUpdate (
    {_id: req.params.issuesId, user: req.user._id },
    req.body,
    { new: true } ,
    (err, updatedIssues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedIssues)
    }  
    )
})

module.exports = issuesRouter