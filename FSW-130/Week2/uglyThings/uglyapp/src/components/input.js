  
import React, { Component } from 'react'
//import {UglyContextConsumer} from './uglycontext'
class Input extends Component {

    state = {
        uglyImage: 
        'data:image/jpeg;base64,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'
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
                <img src={this.state.uglyImage} alt="Blob Fish"/>
            </div>
        )
    }
}

export default Input