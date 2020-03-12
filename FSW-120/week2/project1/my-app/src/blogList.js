import React from "react"

function BlogList(props){
    return (
        <div className="container">
            <h1 style={{color: props.title && "black"}}>{props.title}</h1>
            <h2 className="subtitle">{props.subtitle}</h2>
            <h3 className="author">{props.author}</h3>
            <h3 className="date">{props.date}</h3>
        </div>
    )
}

export default BlogList