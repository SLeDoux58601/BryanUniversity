import React, { useContext } from 'react'
import {CapContext} from '../capContext'

function ThemeSelect(props) {
    const { theme, handleTheme } = useContext(CapContext)
    return (
        <select onClick={handleTheme}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    )
}

export default ThemeSelect