import React from 'react'
import Header from './Header'
import { Link, Route, Switch } from 'react-router-dom'
import FormPage from './Pages/FormPage'
import HomePage from './Pages/HomePage'



function App() {

    return (
        <div>
            <Header />
            {/* <Link to="/">Home</Link> */}
            <Link to="/formPage">Forms</Link>
            <Link to="/home">Home</Link>

            <Switch>
                {/* <Route to="/"><App /></Route> */}
                <Route path="/formPage"><FormPage /></Route>
                <Route path="/home"><HomePage /></Route>

            </Switch>
            {/* <SubmitForm /> */}
        </div>
    )
}

export default App