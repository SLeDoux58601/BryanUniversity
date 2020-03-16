import React, { Component } from 'react'
import TodoComponent from './TodoComponent'
import axios from 'axios'


const todoFormPost = document.getElementById("todoForm")

todoFormPost.addEventListener("submit", function(){

    const newTodo = {
        title: todoFormPost.title.value,
        description: todoFormPost.description.value,
        price: todoFormPost.price.value
    }

    axios.post("https://api.vschool.io/zachfarmer/todo", newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
}
)

const deleteButton = document.getElementById("delete")

deleteButton.addEventListener("click", function(){

    axios.delete("https://api.vschool.io/zachfarmer/todo/5e250596241fcb274d5f7c1f")
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
}
)

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        axios.get("https://api.vschool.io/zachfarmer/todo").then((response) => {
            this.setState({
                todos: response.data
            })
        })
    }
    
    render() {
        let mappedTodos = this.state.todos.map((todo)=>{
            return <TodoComponent title={todo.title}
                                    checkbox={todo.checkbox}
                                    description={todo.description}
                                    price={todo.price}
                                    />
        })

        return mappedTodos
    }
}

export default TodoList