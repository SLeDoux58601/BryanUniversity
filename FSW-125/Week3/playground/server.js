const express = require("express")
const app = express()

/* Middleware */
app.use(express.json())


const movies = [
    {title: "Borderlands", genre: "Fantasy"},
    {title: "Outerlands", genre: "scifi"},
    {title: "Fallout", genre: "doomsday"}
]

app.get("/movies", (req, res) => {
    res.send(movies)
})

app.post("/movies", (req, res) => {
    const newItem = req.body
    movies.push(newItem)
    res.send(`${newItem.title} added!` )
})


/* Server Listen */
app.listen(9000, () => {
    console.log("Connected")
})