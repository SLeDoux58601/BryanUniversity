import React, { useState } from 'react'

function AddTodoForm(props) {
    const initInputs = { title: props.title || "", description: props.description || "", ID: props.ID }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs, [name]: value
        }))
    }



    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props.ID)
        setInputs(initInputs)
        console.log(`${inputs} TEST ${props.ID}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="inputadjustment"
                type="text"
                name="title"
                value={inputs.title}
                onChange={handleChange}
                placeholder="title" />

            <input
                className="inputadjustment"
                type="text"
                name="description"
                value={inputs.description}
                onChange={handleChange}
                placeholder="description" />
            <button>{props.btnText}</button>




        </form>
    )
}

export default AddTodoForm