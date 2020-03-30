import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom'
import Landing from './Landing/index'
import Details from './Tweets/Details/index'

import './App.css';

function App() {
  return (
    <div>
     <Switch>
       <Route
          exact path='/'
          component={Landing} />
       <Route
          exact path=':id'
          component={Details} />
     </Switch>
    </div>
  );
}

export default withRouter(App);
