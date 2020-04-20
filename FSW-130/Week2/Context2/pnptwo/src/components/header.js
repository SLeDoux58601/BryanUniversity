import React, { Component } from 'react'
import {MovieContextConsumer} from './movieContext'

class header extends Component {
    render() {
        return(
            <MovieContextConsumer>
                {({movieName}) => (
                    <header>
                        <h1>{(movieName === '' || movieName === " " ? "Nothing is playing": `Current movie playing is ${movieName}`)}</h1>
                    </header>
                )}
            </MovieContextConsumer>
        )
    }
}

export default header