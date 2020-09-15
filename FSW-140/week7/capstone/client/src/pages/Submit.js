import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddTodoForm from '../components/AddTodoForm'

function Submit() {
    const [todo, setTodo] = useState([])
    function addTodo(newTodo) {
        axios.post("/addTodo", newTodo)
            .then(res => {
                setTodo(prevTodo => [...prevTodo, res.data])
                console.log(`${res.data}`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="flex">
            <AddTodoForm submit={addTodo}
                btnText="Add Todo" />
        </div>
    )
}
export default Submit