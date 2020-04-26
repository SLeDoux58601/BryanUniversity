const express = require('express')
const app = express()

const { v4: uuidv4 } = require('uuid');

const bounties = [
    {
        firstName: "Han",
        lastName: "Solo",
        isLiving: true,
        bountyAmount: 1,
        type: 'Smuggler',
        _id: uuidv4()
    },
    {
        firstName: "Luke",
        lastName: "Skywalker",
        isLiving: true,
        bountyAmount: 100,
        type: 'Jedi',
        _id: uuidv4()
    }
]
//Needed for POST
app.use(express.json())

app.get("/bounties", (req, res) => {
    res.send(bounties)
})

app.post("/bounties", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Bounty on ${newBounty.firstName} ${newBounty.lastName} acquired. Target's head is priced at ${newBounty.bountyAmount}. Target may retaliate using methods befitting a ${newBounty.type}.`)
})

app.listen(9000, () => {
    console.log('connected')
})