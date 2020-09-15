const express = require('express')
const mysql = require('mysql')
const server = express()
const morgan = require('morgan')

server.use(morgan('dev'))
server.use(express.json())

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'OliverO214',
        database: 'todolist'
    }
)
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql is now connected')
})

//Creates a Database
server.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE todolist';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result)
        res.send('database created');
    })
});

//creates table
server.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE todos(ID INT AUTO_INCREMENT, title varchar(250), description varchar(250), complete BOOLEAN default 0, PRIMARY KEY(ID))'
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result)
        res.send('table created')
    })
});



server.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})
//Get all
server.get('/getTodos', (req, res) => {
    let sql = 'SELECT * FROM todos';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result)
        res.send(result)
    })
})

//Insert item
server.post('/addTodo', (req, res) => {
    let post = { title: req.body.title, description: req.body.description }
    //sends off both inputs
    let sql = "INSERT INTO todos SET ?"
    let query = db.query(sql, post, (err, results) => {
        if (err) {
            throw err;
        }
        //State of the post request
        console.log(results)

    })
    let returnData = 'SELECT * FROM todos';
    db.query(returnData, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result)
        //Tells to return only the last one at very end
        res.send(result[result.length - 1])
    })
})

//Delete
server.delete('/deleteTodo/:ID', (req, res) => {
    let sql = `DELETE FROM todos WHERE ID = ${req.params.ID}`
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result)
        res.send(result)
    })
})

//Update
server.put('/updateTodo/:ID', (req, res) => {
    let post = { title: req.body.title, description: req.body.description }
    let sql = `UPDATE todos SET ? WHERE ID = ${req.params.ID}`
    db.query(sql, post, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result)
    })
    let returnData = `SELECT * FROM todos WHERE ID =${req.params.ID}`
    db.query(returnData, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result)
        res.send(result[0])
})})

server.listen('5050', () => {
    console.log('Running port 5050')
})