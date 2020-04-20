import React, { Component } from 'react'
const { Provider, Consumer } = React.createContext()

class MovieContextProvider extends Component {
    state = {
        movieName: "Lorem"
    } 

    nextMovie = (movieName) => {
        this.setState({movieName})
    }
    

    render() {
        const {movieName} = this.state
        return (
            <Provider value={{movieName, nextMovie: this.nextMovie}}>
                {this.props.children}
            </Provider>
        )
    }
}

export { MovieContextProvider, Consumer as MovieContextConsumer }