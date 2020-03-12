import React from 'react'

function Card(props){
    return(
        <div>
            <h1 className="head">Country: {props.country} </h1>
            <h3 className="middle">Capital: {props.capital}</h3>
            <p className="location">Location: {props.location}</p>
        </div>
    )
}

export default Card