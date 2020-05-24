import React, { useState } from 'react'

function SubmitForm() {
    const [inputData, setInputData] = useState({ firstName: "", lastName: "", place: "" })
    const [storedData, setStoredData] = useState([])

    function handleChange(event) {
        const { name, value } = event.target
        setInputData(prevInputData => ({ ...prevInputData, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        setStoredData(prevStoredData => [...prevStoredData, inputData])
    }

    const info = storedData.map((data, index) => <h2 key={index}>{data.firstName} {data.lastName} {data.place}</h2>)
    return (
        <div>

            <h3>Please Fill out your information here:</h3>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="First Name"
                    name="firstName"
                    value={inputData.firstName}
                    onChange={handleChange} />
                <input
                    placeholder="Last Name"
                    name="lastName"
                    value={inputData.lastName}
                    onChange={handleChange} />
                <input
                    placeholder="Last Name"
                    name="place"
                    value={inputData.place}
                    onChange={handleChange} />
                <br />
                <button>Add Data</button>
            </form>
            {info}
        </div>
    )
}

export default SubmitForm