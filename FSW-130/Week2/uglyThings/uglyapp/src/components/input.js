  
import React, { Component } from 'react'
//import {UglyContextConsumer} from './uglycontext'
class Input extends Component {

    state = {
        uglyImage: ''
    }
    // HandleChange currently displays text and iamges as required. Submit does not pass items, yet.
    handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    eventItemsUpdate = (event) => {
        event.preventDefault()
        this.setState({
            uglyImage: ''
        })
    }

    render() {
        return (
            <div>
               
                <form>
                    <input 
                    type="text"
                    placeholder="title"
                    name="title"
                    />
                    <input
                    type="text"
                    placeholder="description"
                    name="description"
                    />
                    <input
                    type="text"
                    placeholder="image-URL"
                    name="uglyImage"
                    value={this.state.uglyImage}
                    onChange={this.handleChange}
                    ></input>
                    <br/>
                    <br/>
                    <button onClick={this.eventItemsUpdate}>Submit</button>

                </form>
                <img src={this.state.uglyImage} alt=''/>
            </div>
        )
    }
}

export default Input