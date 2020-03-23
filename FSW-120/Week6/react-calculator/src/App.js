import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Add from './Add'
import Subtraction from './Sub'
import Mul from './Mul'
import Div from './Div'
//import './App.css';

function App() {
  return(
    <div>
      <Navbar />
        <Switch>
          <Route exact path="/" component = {Home}/>
          <Route path = "/add" component = {Add}/>
          <Route path = "/sub" component = {Subtraction}/>
          <Route path = "/mul" component = {Mul}/>
          <Route path = "/div" component = {Div}/>
        </Switch>
      </div>
  )
  
}

export default App;