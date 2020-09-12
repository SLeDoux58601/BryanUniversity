const express = require("express");
const app = express();
const morgan = require("morgan");
const mysql = require ("mysql");
app.use(express.json());
app.use(morgan("dev"));
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"OliverO214",
    database:"fullstack"
})
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected to MySQL");
})


app.get("/createdb", (req,res) => {
    let sql = 'CREATE DATABASE fullstack;';
    db.query(sql,(err,result) => {
        if(err){
            throw err;
        }
        console.log(result);
        let sql = 'USE fullstack;';
        db.query(sql,(err,result) => {
            if (err) {
                throw err;
            }
            console.log(result);
            res.send("using fullstack database");
        })
    })
})


app.get("/createtable", (req,res) => {
    // let sql = `CREATE TABLE users(
    //     exampleID INT NOT NULL auto_increment,
    //     colors VARCHAR(100) NOT NULL,
    //     dumbcolumn INT NOT NULL,
    //     PRIMARY KEY (exampleID)
    //     );`
    // db.query(sql,(err,result) => {
    //     if(err){
    //         throw err;
    //     }
    //     console.log(result);
        let sql = `INSERT INTO users (colors,dumbcolumn) VALUES ('red','2'); `;
     
        db.query(sql,(err,result) => {
            if (err) {
                throw err;
            }
            console.log(result);
            res.send("users table has been created.");
        })
        let sql1 = `INSERT INTO users (colors,dumbcolumn) VALUES ('green','4'); `;
      
        db.query(sql1,(err,result) => {
            if (err) {
                throw err;
            }
            console.log(result);
            res.send("users table has been created.");
        })
        let sql2 = `INSERT INTO users (colors,dumbcolumn) VALUES ('blue','6') `;
       
        db.query(sql2,(err,result) => {
            if (err) {
                throw err;
            }
            console.log(result);
            res.send("users table has been created.");
        })
    // })
})

app.get("/users", (req,res) => {
    let sql = 'SELECT * FROM Users';
    db.query(sql,(err,result) => {
        if(err){
            throw err;
        }
        console.log(result);
       
           
            res.send(result);
    })
})

app.get("/users/:id", (req,res) => {
    console.log(req.params.id)
    let sql = `SELECT * FROM Users WHERE ID = ${req.params.id}`;
    db.query(sql,(err,result) => {
        if(err){
            throw err;
        }
        console.log(result);
       
           
            res.send(result);
    })
})

app.delete("/users/:id", (req,res) => {
    console.log(req.params.id)
    let sql = `DELETE * FROM Users WHERE ID = ${req.params.id}`;
    db.query(sql,(err,result) => {
        if(err){
            throw err;
        }
        console.log(result);
       
           
            res.send(result);
    })
})

// error handler
app.use((err, req, res, next) => {
    console.log (err);
    if ( err.name === "UnauthorizedError"){
        res.status(err.status);
    }
    return res.send({errMsg: err.message});
});

//listen method / port
app.listen(3030, () => {
    console.log("Server is running on port 3030");
});
module.exports = { db: db};