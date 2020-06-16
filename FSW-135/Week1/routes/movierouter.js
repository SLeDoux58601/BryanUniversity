const express = require ('express')
const movieRouter = express.Router()
const Movie = require ('../models/movie.js')


//Get All
movieRouter.get("/",(req, res, next) => {
Movie.find((err, movies) => {
if(err){
    res.status(500)
}
})
})


//post one
movieRouter.post ("/")