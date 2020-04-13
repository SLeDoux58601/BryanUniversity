import React, {Component} from "react"
import ThemeContext from "./ThemeContext"

class Button extends Component {
    render() {
        const theme = this.context
        return (
            <button className={`${theme}-theme`}>Switch Day/Night Mode</button>
        )    
    }
}

Button.contextType = ThemeContext

export default Button