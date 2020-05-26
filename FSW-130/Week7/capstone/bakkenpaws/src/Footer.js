import React, { useContext } from 'react'
import { CapContext } from './capContext'

function Footer() {
    const { theme } = useContext(CapContext)

    return (
        <div className={`${theme}-footer`}>
            <footer >
                <h1>Please contact me for more information</h1>
            </footer>
        </div>
    )
}

export default Footer