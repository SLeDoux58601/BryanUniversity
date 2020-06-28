  
import React from 'react'
import IssuesForm from './IssuesForm.js'
import IssuesList from './IssuesList.js'
import Issues from './Issues.js'


export default function Profile(){
  return (
    <div className="profile">
      <h1>Welcome @Username!</h1>
      <h3>Add A Issue</h3>
      <IssuesForm />
      <h3>Your Issue</h3>
    </div>
  )
}