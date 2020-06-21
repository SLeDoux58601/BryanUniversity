  
const express = require('express')
const issueRouter = express.Router()
const Issue = require('../models/issue')

//one
issueRouter.get('/:issueId', (req, res, next) => {
    Issue.find(
        {_id: req.params.issueId},
        (err, issue) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issue)
    })
})


//all
issueRouter.get('/', (req, res, next) => {
    Issue.find((err, issues) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//new 
issueRouter.post("/", (req, res, next) => {
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

//Update 
issueRouter.put('/:issueId', (req, res, next) => {
    Issue.findByIdAndUpdate(
        {_id: req.params.issueId},
        req.body,
        {new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

//Delete 
issueRouter.delete('/:issueId', (req, res, next) => {
    Issue.findOneAndDelete(
        {_id: req.params.issueId},
        (err, deletedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted issue ${deletedIssue.title}`)
        }
    )
})


module.exports = issueRouter