import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Magic from './components/Magic'

function App() {
const [magic, setMagic] = useState([])
useEffect(() => {
    axios.get('/magic')
        .then(res => setMagic(res.data))
        .catch(err => console.log(err))
}, [])

    return(
        <div>
            {magic.map(spell => <Magic {...spell} key={spell.title}/>)}
        </div>
    )
}

export default App
