import React, {Component} from 'react'

class Addition extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value1: 0,
            value2: 0,
            result: 0
        };
        this.handlevalue1Change = this.handlevalue1Change.bind(this)
        this.handlevalue2Change = this.handlevalue2Change.bind(this)
    }

    handlevalue1Change (evt) {
        console.log(evt.target.value);
        this.setState({ value1: Number(evt.target.value) });
    }

    handlevalue2Change (evt) {
        console.log(typeof evt.target.value);
        this.setState({ value2: Number(evt.target.value) });
    }

    addAction = (event) => {
        let x = this.state.value1 + this.state.value2
        this.setState({result: x })
    }

    render() {
         return (
            <div className="form">
                <form>
                    <label>
                        <input className="number1" type="number" onChange={this.handlevalue1Change} /><br />
                        <input className="number2" type="number" onChange={this.handlevalue2Change} /><br />
                        <input type="button" onClick={this.addAction} value="Add" /><hr />
                        Result: <input className="result" type="text" value={this.state.result} readOnly />
                    </label>                      
                </form>
            </div>
    
            
    )
    }
   
        
}


export default Addition