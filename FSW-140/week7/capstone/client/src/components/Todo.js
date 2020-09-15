import React, { useState } from 'react'
import TodoForm from './AddTodoForm'

function Todo(props) {
    const { title, description, ID } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div>
            {!editToggle ?
                <>
                    <div className="seperation">
                        <h1><span>Title: </span>{title}</h1>
                        <p><span>Description: </span>{description}</p>                        {console.log(ID)}
                        <button onClick={() => props.deleteTodo(ID)}>Delete</button>
                        <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                    </div>
                </>
                :
                <>
                    <div className="seperation">
                        <TodoForm
                            title={title}
                            description={description}
                            ID={ID}
                            btnText="Submit edit"
                            submit={props.editTodo} />
                    </div>
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }
        </div>
    )
}

export default Todo