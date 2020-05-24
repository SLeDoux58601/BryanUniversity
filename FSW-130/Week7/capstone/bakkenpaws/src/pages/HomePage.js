import React, { useContext } from 'react'
import { CapContext } from '../capContext'
import ThemeSelect from '../Components/themeSelect'

function HomePage(props) {
    const { theme, toggleTheme } = useContext(CapContext)
    return (
        <div>
            <button
                onClick={toggleTheme}
                className={`${theme.theme}-theme`}
            >Switch Theme</button>
            <ThemeSelect />
        </div>
    )
}

export default HomePage
