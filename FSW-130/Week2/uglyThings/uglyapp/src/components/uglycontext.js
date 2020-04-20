import React, { Component } from 'react'
const {Provider, Consumer} = React.createContext()


class UglyContextProvider extends Component {
    state = {
        ugly: "Test Item"
    }
    
    render() {
        const {ugly} = this.state
        return(
            
            <Provider value={{ugly}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyContextProvider, Consumer as UglyContextConsumer}