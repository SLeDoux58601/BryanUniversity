import React, { Component } from 'react'
import { connect } from 'react-redux'


/* const containerStyle = {
    display: 'flex'
}
const buttonStyle = {
    fontSize: '1.5rem',
    width: '40px',
    height: '40px'
} */

const mapStateToProps = (state) => {
    return {
        minutes: state.minutes,
        seconds: state.seconds,
        milliseconds: state.milliseconds
    }
}





class Counter extends Component {


    startTimer = () => {
       this.t = setInterval(() => { this.props.dispatch({ type: 'START_TIMER' }) }, 100)
        
        
    }

    stopTimer = () => {
        clearInterval(this.t)
    }

    resetTimer = () => {
        this.props.dispatch({type: 'RESET_TIMER'})
    }

    render() {
        return (
            <div>
                <header>
        <h1>{this.props.minutes}:{this.props.seconds}:{this.props.milliseconds}</h1>
                    <div>
                        <button onClick={this.startTimer}>Start</button>
                        <button onClick={this.stopTimer}>Stop</button>
                        <button onClick={this.resetTimer}>Reset</button>
                    </div>
                </header>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Counter)