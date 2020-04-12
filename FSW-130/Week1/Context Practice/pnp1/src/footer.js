import React from 'react'
import { ThemeContextConsumer } from './themeContext'

function Footer() {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-theme`}>
                    <p>Hope that you had fun, and come back soon for more context codes.</p>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default footer