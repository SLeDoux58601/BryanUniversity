import React from 'react'
//let data = require("./data.json")

//console.log(data)



function List(props){
    return(
        <div className="container">
            <h1>Name: {props.name}</h1>
            <h3>Show: {props.show}</h3>
            <h3>Catchphrase: {props.catchphrase}</h3>
            <hr></hr>
        </div>
    )
}

export default List