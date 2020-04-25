import React, { Component } from 'react';
import './App.css';
import { startTimer, resetTimer } from './actions.js'
import { connect } from 'react-redux'

class Counter extends Component {


    start = () => {
        this.t = setInterval(() => {this.props.dispatch(startTimer());}, 1);
        console.log(this.props)
    }

    stop = () => {
        // this.props.dispatch(stopTimer());
        clearInterval(this.t)
    }

    reset = () => {
        clearInterval(this.t)
        this.props.dispatch(resetTimer());
    }
    render() {
        return (
            <div>
                <h1>
                {/* Minutes */}
                    <span>{this.props.minutes}</span>:
                {/* Seconds */}
                    <span>{this.props.seconds}</span>:
                {/* Milliseconds */}
                    <span>{this.props.milliseconds}</span>
                </h1>
                <br />
                
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>

            </div>
        );
    }
}

const mapStateToProps = state => {
    //mapStatetoProps "grabs" the state and connects it with this compoenent where state will be passed as props.
    return {
        milliseconds: state.milliseconds,
        minutes: state.minutes,
        seconds: state.seconds,
        interval: state.interval
    };
};

export default connect(mapStateToProps)(Counter);