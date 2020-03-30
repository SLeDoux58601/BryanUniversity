import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Todos from './Todos';
import AddTodo from './AddTodo';
//import About from './components/pages/About';

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://api.vschool.io/zachfarmer/todo')
      .then(res => this.setState({ todos: res.data }));
  }

  markComplete = (id) => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if(todo.id === id)
            todo.completed = !todo.completed;
          return todo;
        })
      });
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
  }

  addTodo = (title, description, price) => {
    axios.post('https://api.vschool.io/zachfarmer/todo', {
      title: title,
      description: description,
      price: price,
      completed: false
    })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data]
      }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            
            <br />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />

            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;