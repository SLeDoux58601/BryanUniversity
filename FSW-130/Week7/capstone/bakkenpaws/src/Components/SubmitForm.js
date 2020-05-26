import React, { useState } from 'react'

function SubmitForm() {
    const [inputData, setInputData] = useState({ firstName: "", middleName: "", lastName: "" })
    const [storedData, setStoredData] = useState([])

    function handleChange(event) {
        const { name, value } = event.target
        setInputData(prevInputData => ({ ...prevInputData, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        setStoredData(prevStoredData => [...prevStoredData, inputData])
    }

    const info = storedData.map((data, index) =>
        <div key={index}>
            <h2><span>Full Name: </span>{data.firstName} {data.middleName} {data.lastName}</h2>
            <hr />
        </div>)
    return (
        <div>

            <h3>Please Fill out your information here:</h3>
            <form onSubmit={handleSubmit} >
                <div className="flexInputs">
                    <input
                        placeholder="First Name"
                        name="firstName"
                        value={inputData.firstName}
                        onChange={handleChange} />
                    <br />
                    <input
                        placeholder="Middle Name"
                        name="middleName"
                        value={inputData.middleName}
                        onChange={handleChange} />
                    <br />
                    <input
                        placeholder="Last Name"
                        name="lastName"
                        value={inputData.place}
                        onChange={handleChange} />
                </div>
                <br />
                <button>Add Data</button>
            </form>
            {info}
        </div>
    )
}

export default SubmitForm