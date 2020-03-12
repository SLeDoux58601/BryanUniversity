import React from 'react'
import Card from './Card'

function App() {
    return (
        <div className="countries">
        <Card country="USA" capital="Washington D.C." location="A country in North America"/>
        <Card country="Russia" capital="Moscow" location="A country in Europe and Asia"/>
        <Card country="France" capital="Paris" location="A country in Europe"/>
        <Card country="Italy" capital="Rome" location="A country in Europe"/>
        <Card country="Germany" capital="Berlin" location="A country in Europe"/>
        <Card country="Brazil" capital="Brasilia" location="A country in South America"/>
        <Card country="Spain" capital="Madrid" location="A country in Europe"/>
        <Card country="Mexico" capital="Mexico City" location="A country in North America"/>
        <Card country="Norway" capital="Oslo" location="A country in Europe"/>
        <Card country="Canada" capital="Ottawa" location="A country in North America"/>
        </div>
    )
}

export default App