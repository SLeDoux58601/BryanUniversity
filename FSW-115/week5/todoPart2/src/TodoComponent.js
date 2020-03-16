import React from 'react'
import './styles.css'

function TodoComponent(props) {
    return (
        <div className="container">
            <h1>{props.title}</h1>
            <input className="checkbox" type="checkbox">{props.checkbox}</input>
            <h2>{props.description}</h2>
            <p>{props.price}</p>
        </div>
    )
}

export default TodoComponent