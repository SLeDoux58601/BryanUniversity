import React from 'react'
import { Link } from 'react-router-dom'
//import styled from 'styled-components'

// const Container = styled.div`
//     width: 400px;
//     height: 140px;
//     background: ${props => props.background};
//     color: ${props => props.color};
//     text-align: ${props => props.fontSize};
//     margin: 30px;
//     padding: 20px;
//     overflow: hidden
// `

// const DetailsSpan = styled.span`
//     :hover {
//         color: red
//     }
// `

function Tweet( { id, details, authorName, time, ...rest } ) {
    return(
        <container {...rest}>
        <div>{details}</div>
        <div>{authorName}</div>  

        <div>
            <Link to={`${id}`}style={{ textDecoration: 'none', color: 'inherit' }}>
                <span>{time} </span> 
            </Link>                       
        </div>
        </container>
    )
}

export default Tweet