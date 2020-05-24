import React, { useState } from 'react'
const CapContext = React.createContext()

function CapContextProvider(props) {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(prevTheme => {
            switch (true) {
                case (prevTheme === "dark"):
                    return "light"
                case (prevTheme === "light"):
                    return "dark"
                default:
                    return "light"
            }
        })
    }

    const handleTheme = (event) => {
        setTheme(
            event.target.value
        )
    }


    return (
        <CapContext.Provider value={{ theme, toggleTheme, handleTheme }}>
            {props.children}
        </CapContext.Provider>
    )
}

export { CapContextProvider, CapContext }