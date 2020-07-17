import React, { useContext } from 'react'
import IssuesForm from './issue/IssuesForm.js'
import IssuesList from './issue/IssuesList.js'
//import Issues from './Issues.js'
import { UserContext } from '../context/UserProvider.js'


export default function Profile(){
  const {
    user: { 
      username 
    }, 
    addIssue,
    issues 
  } = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome {username}!</h1>
      <h3>Add A Issue</h3>
      <IssuesForm addIssue={addIssue} />
      <h3>Your Issue</h3>
      <IssuesList issues={issues}/>
    </div>
  )
}