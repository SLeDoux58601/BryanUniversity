const express = require ("express")
const app = express()

// 1. Endpoint (mount path)
// 2. CallBack function 
app.get("/player", (req, res) => {
  res.send({name: "Rae", age: 26})
})

const vehicles = [
    {
        "chevy": ["black", "automatic", "pickup"],
        "ford": ["white", "automatic", "pickup"]
    },
    {
        "nissan": ["gray", "automatic", "sedan"],
        "datsun": ["red", "manual", "rockcrawler"]
    }
]
const kids = [
    {
        "kid1": "Gunner",
        "kid2": "Riley"
    },
    {
        "kid3": "Oliver",
        "kid4": "Mikka"
    }
]
const videoGames = [
    {
        "Series1": "Borderlands",
        "Series2": "Borderlands 2"
    },
    {
        "Series3": "Borderlands pre sequal",
        "Series4": "Borderlands 3",
        "Series5": "Borderlands Handsome Jack Collection"
    }
]
const pet = [
    {"Rabbit": "I have a pet rabbit, his name is Rorschach. He is named after the guy in the show Watchmen and the inkblot test, we call him Roar. He is a therapy pet."}
]


app.get("/vehicles", (req, res) => {
    res.send(vehicles)
})
app.get("/kids", (req, res) => {
    res.send(kids)
})
app.get("/videoGames", (req, res) => {
    res.send(videoGames)
})

app.get("/pet", (req, res) => {
    res.send(pet)
})



        //1:Port  2:CB
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
        
    })