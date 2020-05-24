import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './styles.css'
import { CapContextProvider } from './capContext'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDom.render(<Router><CapContextProvider><App /></CapContextProvider></Router>, document.getElementById('root'))