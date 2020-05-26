import React, { useContext } from 'react'
import { CapContext } from './capContext'

function Header(props) {
    const { theme } = useContext(CapContext)
    return (
        <div className={`${theme}-theme`}>
            <h1>LeDoux Codes</h1>
            <i className="fas fa-air-freshener fa-2x"></i>
            <h3>LeDoux Codes, ready to start when you are</h3>

        </div>
    )
}

export default Header