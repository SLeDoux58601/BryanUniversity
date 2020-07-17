import React from 'react'

export default function Issues(props){
  const { title, description } = props
  return (
    <div className="issue">
      <h1>{ title }</h1>
      <h3>{ description } </h3>
    </div>
  )
}