import React, { Component } from 'react';
import propTypes from 'prop-types';
import './App.css';


export class TodoItem extends Component {
    getStyle = () => {
        return {
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    };

    render() {
        const { id, title, description, price, completed } = this.props.todo;
        return (
            <div className="container"style={ this.getStyle() }>
                <p className="container">
                    <input type="checkbox" onChange={ this.props.markComplete.bind(this, id ) } checked={ completed ? 'checked': '' }/>{' '}
                    <br />{title}<br />{description}<br />{price}
                    <button className="btn" onClick={this.props.delTodo.bind(this, id)} style={{ float: 'right' }}>X
                    </button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todos: propTypes.object.isRequired,
    markComplete: propTypes.func.isRequired,
    delTodo: propTypes.func.isRequired
}


export default TodoItem;