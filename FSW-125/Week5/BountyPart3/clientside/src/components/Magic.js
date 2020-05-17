import React from 'react'

function Magic(props) {
    console.log(props)
    const {name, type, _id} = props
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Element: {type}</p>
        </div>
    )
}

export default Magic