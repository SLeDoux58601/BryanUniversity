import React from 'react'
import "./css/contact.css"

function Contact() {
    return (
        <form className="formContainer">
           <div>
            <input className="input" type="text" placeholder="Name"></input>
            <input className="input" type="text" placeholder="Address"></input>
            <hr />
            <input className="input" type="number" placeholder="Number"></input>
            <input className="input" type="text" placeholder="Inquiry"></input>
            <hr />
            <button className="button">Submit!</button>
            </div> 
        </form>
        
    )
}

export default Contact