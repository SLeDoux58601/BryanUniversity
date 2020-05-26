import React from 'react'
import Header from './Header'
import { Link, Route, Switch } from 'react-router-dom'
import FormPage from './Pages/FormPage'
import ThemePage from './Pages/ThemePage'
import HomePage from './Pages/HomePage'
import Footer from './Footer'



function App() {

    return (
        <div >
            <Header />
            <div className="nav">
                <Link to="/homePage">Home</Link>
                <Link to="/formPage">Forms</Link>
                <Link to="/themePage">Themes</Link>
            </div>

            <Switch>
                <Route path="/formPage"><FormPage /></Route>
                <Route path="/themePage"><ThemePage /></Route>
                <Route path="/homePage"><HomePage /></Route>

            </Switch>
            <Footer />
        </div>
    )
}

export default App