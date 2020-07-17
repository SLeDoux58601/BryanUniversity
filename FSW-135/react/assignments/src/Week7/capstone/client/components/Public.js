import React from "react";
import IssuesList from "./issue/IssuesList"

export default function IssuesPage(props) {

    const { allIssues, getIssues } = props
    if (!allIssues.length) {
        
      getIssues()
    }

    return <div className="issuesList">
        <IssuesList issues={allIssues} />
    </div>
}