import React from 'react'

import './style.css'

function App() {
    return (
      <div className="container">
        <input type="checkbox" />
        <p className="todo">Go to the Gym</p>

        <input type="checkbox" />
        <p className="todo">Get groceries</p>

        <input type="checkbox" />
        <p className="todo">Pick up the Kids</p>

        <input type="checkbox" />
        <p className="todo">Cook dinner</p>

        <button className="button">OK</button>
      </div>
    )
}

export default App