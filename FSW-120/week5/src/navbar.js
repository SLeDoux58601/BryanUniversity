import React from 'react'
import {Link} from 'react-router-dom'
import "./css/topbottom.css"

function Navbar(props) {
    return (
        <div className="navBar  ">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
        </div>
    )
}

export default Navbar