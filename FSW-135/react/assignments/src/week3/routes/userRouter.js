const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')

//Get all
userRouter.get('/', (req, res, next) => {
    User.find((err, users) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(users)
    })
})

//Get one
userRouter.get('/:userId', (req, res, next) => {
    User.find(
        {_id: req.params.userId},
        (err, user) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(user)
    })
})

//Add new user
userRouter.post("/", (req, res, next) => {
    const newUser = new User(req.body)
    newUser.save((err, savedUser) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedUser)
    })
})

//Update user
userRouter.put('/:userId', (req, res, next) => {
    User.findByIdAndUpdate(
        {_id: req.params.userId},
        req.body,
        {new: true},
        (err, updatedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedUser)
        }
    )
})

//Delete user
userRouter.delete('/:userId', (req, res, next) => {
    User.findOneAndDelete(
        {_id: req.params.userId},
        (err, deletedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted user ${deletedUser.name}`)
        }
    )
})


module.exports = userRouter