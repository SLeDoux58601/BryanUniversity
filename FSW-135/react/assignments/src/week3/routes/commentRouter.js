const express = require('express')
const commentRouter = express.Router()
const comment = require('../models/comment')

// one
commentRouter.get('/:commentId', (req, res, next) => {
    comment.find(
        {_id: req.params.commentId},
        (err, comment) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comment)
    })
})

// all
commentRouter.get('/', (req, res, next) => {
    comment.find((err, comments) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})


//Add
commentRouter.post("/", (req, res, next) => {
    const newcomment = new comment(req.body)
    newcomment.save((err, savedcomment) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedcomment)
    })
})

//Delete 
commentRouter.delete('/:commentId', (req, res, next) => {
    comment.findOneAndDelete(
        {_id: req.params.commentId},
        (err, deletedcomment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted comment titled: ${deletedcomment.title}`)
        }
    )
})

//Update
commentRouter.put('/:commentId', (req, res, next) => {
    comment.findByIdAndUpdate(
        {_id: req.params.commentId},
        req.body,
        {new: true},
        (err, updatedcomment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedcomment)
        }
    )
})



module.exports = commentRouter