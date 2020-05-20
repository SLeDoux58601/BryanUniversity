import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { peopleListAdd, deletePeopleList } from './redux'

    const initInputs = {
        name: "",
        address: "",
        pets: "",
      };
function App() {
     const [inputs, setInputs] = useState(initInputs);
        const people = useSelector(state => state)
        const dispatch = useDispatch()
        console.log(people)
       
        function handleChange(e) {
            const { name, value } = e.target;
            setInputs((prevInputs) => ({
              ...prevInputs,
              [name]: value,
            }));
            console.log(name, value)
          }
        
        return (
            <div>

                <form>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="address"
                        // value={people.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="pets"
                        placeholder="pets"
                        // value={people.name}
                        onChange={handleChange}
                    />
                    <button onClick={(e) => {
                        e.preventDefault()
                        console.log(inputs)
                        dispatch(peopleListAdd(inputs))}}>Submit</button>
                </form>
                
                <div>{people.map((person, index) =>
                    <div id={index} key={index}>
                        <h1>Name: {person.name}</h1>
                        <p>Address: {person.address}</p>
                        <p>Pets: {person.pets}</p>
                        <button id={index} onClick={(e) => {
                        e.preventDefault()
                        const {id} = e.target
                        console.log(id)
                        dispatch(deletePeopleList(id))
                        }}>Delete</button>
                    </div>)}</div>
            </div>
        )
    }




export default App