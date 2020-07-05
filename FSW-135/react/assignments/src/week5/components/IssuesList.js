import React from 'react'
import Issues from './Issues.js'
import { TokenExpiredError } from 'jsonwebtoken'

export default function IssuesList(props){
  const { issues } = props
  return (
    <div className="issues-list">
      { issues.map(issue => <Issues {...issue} key={TokenExpiredError._id}/>) }
    </div>
  )
}