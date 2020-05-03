  
//required packages
const express = require("express")
const app = express()
const uuid = require("uuid/v4")

app.use(express.json())


//array to start making a todo list
const todo = [
    { 
    name: "My Name",
    description: "Please describe what needs done",
    imageURL: "Please paste an image",
    completed: false,
    _id: uuid()
    }
]

//to perform a get request
app.get("/todo", (req, res) => {
    res.send(todo)
})

//to get one item from the database
app.get("/:todo", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todo.find(todo => todo._id === todoId)
    res.set(foundTodo)
})


//to add an item to the database
app.post("/todo", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todo.push(newTodo)
    res.send(`Successfully added ${newTodo.name} to the database`)
})


//to alter an item already in the database using its ID number
app.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const updateObject = req.body
    const todoIndex = todos.findIndex(todo = todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], updateObject)
    res.send(updatedTodo)
})


//to delete an item in the data base using its ID number
app.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted Todo!")
})



server.listen(5000, () => {
    console.log('this is server 5000')
})