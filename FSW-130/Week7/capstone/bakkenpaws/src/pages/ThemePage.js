import React, { useContext } from 'react'
import { CapContext } from '../capContext'
import ThemeSelect from '../Components/themeSelect'

function ThemePage(props) {
    const { theme, toggleTheme } = useContext(CapContext)
    return (
        <div className="emptyPage">
            
            <button
                onClick={toggleTheme}
                className={`${theme.theme}-theme`}
            >Switch Theme</button>
            
            <ThemeSelect />
        </div>
    )
}

export default ThemePage