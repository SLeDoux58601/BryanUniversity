import React, { useContext } from 'react'
import {CapContext} from '../capContext'

function ThemeSelect(props) {
    const { handleTheme } = useContext(CapContext)
    return (
        <select onClick={handleTheme}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="blue">blue</option>
        </select>
    )
}

export default ThemeSelect