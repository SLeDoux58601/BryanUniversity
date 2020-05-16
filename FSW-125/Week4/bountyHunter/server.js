//required packages
const express = require("express")
const app = express()
const uuid = require("uuid/v4")

app.use(express.json())

//bounty array to get me started

const bounty = [
    { 
    FirstName: "Luke", 
    LastName: "Skywalker", 
    Living: true, 
    BountyAmount: 500000, 
    Type: "Jedi", 
    _id: uuid()
    },
    {
    FirstName: "Darth", 
    LastName: "Vader", 
    Living: false, 
    BountyAmount: 0, 
    Type: "Sith", 
    _id: uuid()
    }
]

//my get request to have my data display in Postman

app.get("/", (req, res) => {
    res.send(movies)
})

//to show a single bounty
app.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounty.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

//my post request
app.post("/bounty", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounty.push(newBounty)
    res.send(`Successfully added ${newBounty.FirstName} to the database`)
})

//my put request to be able to change a specific thing about my bounties

app.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty = bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})

//my delete request to be able to delete a bounty

app.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted bounty!")
})



//a simple console log to let me know that my server is working
app.listen(9000, () => {
    console.log('now connected to port 9000')
})
