import React, { Component } from 'react';
import Blocks from './Blocks'
//import './App.css';

function handleClick() {
    let letters= '0123456789ABCDEF'
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}

class App extends Component {
  constructor(props) {
    super(props);
  }
   render() {
  
      return (
        <div className="container">
        <Blocks color={this.state.color[1]}/>

        <Blocks color={this.state.color[1]}/>

        <Blocks color={this.state.color[2]}/>

        <Blocks color={this.state.color[3]}/>
        
        <button onClick={handleClick}>Change Colors!</button>
        </div>
      )
      }
  }

export default App