import React from "react"
import ThemeContext from "./themeContext"

// class Header extends Component {
//     static contextType = ThemeContext
//     render() {
//         const theme = this.context
//         return (
//             <header className={`${theme}-theme`}>
//                 <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
//             </header>
//         )    
//     }
// }

function Header() {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-theme`}>
                    <p> Let's change themes from night to day.</p>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Header