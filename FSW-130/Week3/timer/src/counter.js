import React, { Component } from 'react';
import './App.css';
import { startTimer, resetTimer } from './action.js'
import { connect } from 'react-redux'
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//   }));

class Counter extends Component {




    start = () => {
        this.t = setInterval(() => {this.props.dispatch(startTimer());}, 1);
        console.log(this.props)
    }

    stop = () => {
        clearInterval(this.t)
        // this.props.dispatch(stopTimer()); >> need help on this part <<
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
                
                <button  variant="contained" color="primary" onClick={this.start}>Start</button>
                {/* <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                     Primary */}
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

// export default function ContainedButtons() {
//     const classes = useStyles();
  
export default connect(mapStateToProps)(Counter);
