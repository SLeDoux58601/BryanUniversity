const express = require('express')
const movieRouter = express.Router()
const uuid = require("uuid/v4")


const movies = [
    {
        Title: "2012",
        Genre: "Action Drama",
        PostitiveReview: "No",
        YearReleased: "2009",
        _id: uuid()
    },
    {
        Title: "I am Legend",
        Genre: "Adventure Drama",
        PostitiveReview: "Yes",
        YearReleased: "2007",
        _id: uuid()
    }
]

movieRouter.get("/", (req, res) => {
    res.send(movies)
})

movieRouter.get("/:moviesId", (req, res) => {
    const moviesId = req.params.moviesId
    const foundMovies = movies.find(movies => movies._id === moviesId)
    res.send(foundMovies)
})

movieRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredMovies = Movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})

movieRouter.post("/", (req,res) => {
    const newMovie = req.body
    newMovie._id = uuid()
    movies.push(newMovie)
    res.send(newMovie)
})

movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send("Successfully deleted movie!")
})

movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const updateObject = req.body
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], updateObject)
    res.send(updatedMovie)
})

module.exports = movieRouter