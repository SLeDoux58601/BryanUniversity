import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Todo from '../components/Todo'

function Home() {
    const [todo, setTodo] = useState([])
    //Get all
    function getTodo() {
        axios.get('/getTodos')
            .then(res =>
                setTodo(res.data))
            .catch(err => console.log(err))
        console.log('hello world')
    }
    //Delete one
    function deleteTodo(todoId) {
        axios.delete(`/deleteTodo/${todoId}`)
            .then(res => {
                setTodo(prevTodo => prevTodo.filter(todo => todo.ID !== todoId))
            })
            .catch(err => console.log(err))
    }
    //Edit

    function editTodo(updates, todoId) {
        axios.put(`/updateTodo/${todoId}`, updates)
            .then(res => { setTodo(prevTodo => prevTodo.map(todo => todo.ID !== todoId ? todo : res.data)) })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getTodo()
    }, [])
    return (
        <div className="flexoutput">{todo.map((stuff, id) => <Todo
            key={id}
            {...stuff}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
        />)}</div>
    )
}
export default Home