import React from 'react'

function Spots(props) {
    return (
        <div>
            <h3>Place: {props.place} </h3>
            <h3>Price: {props.price} </h3>
            <h3>Time to Go: {props.time} </h3>
            <hr/>
        </div>
    )

}

export default Spots