import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Todo from './components/Todo'
// import AddTodoForm from './components/AddTodoForm'
import { Link, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Submit from './Pages/Submit'
import Text from './Pages/Text'
import Images from './Pages/Images'
import Header from './components/Header'



function App() {
    // const [todo, setTodo] = useState([])
    // //Get all
    // function getTodo() {
    //     axios.get('/getTodos')
    //         .then(res =>
    //             setTodo(res.data))
    //         .catch(err => console.log(err))
    //     console.log('hello world')
    // }
    // // //Add one
    // // function addTodo(newTodo) {
    // //     axios.post("/addTodo", newTodo)
    // //         .then(res => {
    // //             setTodo(prevTodo => [...prevTodo, res.data])
    // //             console.log(`${res.data}`)
    // //         })
    // //         .catch(err => console.log(err))
    // // }
    // //Delete one
    // function deleteTodo(todoId) {
    //     axios.delete(`/deleteTodo/${todoId}`)
    //         .then(res => {
    //             setTodo(prevTodo => prevTodo.filter(todo => todo.ID !== todoId))
    //         })
    //         .catch(err => console.log(err))
    // }

    // //Edit Title

    // function editTodo(updates, todoId) {
    //     axios.put(`/updateTodo/${todoId}`, updates)
    //         .then(res => { setTodo(prevTodo => prevTodo.map(todo => todo.ID !== todoId ? todo : res.data)) })
    //         .catch(err => console.log(err))
    // }

    // useEffect(() => {
    //     getTodo()
    // }, [])

    return (
        <div>
            <Header />
            <div>
                <div className="flex">
                    <span className="linkadjustment"><Link to="/Home">Home</Link></span>
                    <span className="linkadjustment"><Link to="/Submit">Submit</Link></span>
                    <span className="linkadjustment"><Link to="/Text">Text</Link></span>
                    <span className="linkadjustment"><Link to="/Images">Images</Link></span>
                </div>
            </div>
            <Switch>
                <Route path='/Home'><Home /></Route>
                <Route path="/Submit"><Submit /></Route>
                <Route path="/Text"><Text /></Route>
                <Route path="/Images"><Images /></Route>
            </Switch>
            {/* <AddTodoForm submit={addTodo}
                btnText="Add Todo" /> */}
            {/* {todo.map((stuff, id) => <Todo
                key={id}
                {...stuff}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
            />)} */}
        </div>
    )
}

export default App
